import React from 'react';
import '../components/checkoutform.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export default function Checkoutform({ cartItems }) {
  console.log(cartItems);
  console.log(cartItems);
  const { currentUser } = useAuth();
  const userId = currentUser.id
  const location = useLocation();
  const { products } = location.state || {
    products: [],
  };
  const total = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    const orderDetails = {
      user: currentUser.id,
      product: cartItems.map((item) => item.id),
      totel: total(),
    };
    axios.post("http://localhost:8000/api/order/", orderDetails)
      .then(() => alert("Your Order has been placed"));

  
  const totalPrice = total();
  navigate(`/PAYMENT/${userId}/${userSessionToken}/${totalPrice}`);
  };

  const getCurrentUserSessionToken = () => {
    return currentUser.session_token;
  };
  const userSessionToken = getCurrentUserSessionToken();
  const navigate = useNavigate(); // Added 'const' and 'useNavigate' import

    // navigate(`/payment-gateway/${userId}/${userSessionToken}/${getTotalPrice()}`, {
    //   state: {
    //     totalPrice: getTotalPrice(),
    //   },
    // });
  

  return (
    <>
    
      <div className="row">
        <div className="col-lg-1" />
        <div className="col h2">Check out</div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-1" />
        <div className="col h6 font-weight-bold">Billing Details</div>
      </div>
      {currentUser ? (
        <form id="form-hehe" onSubmit={() => { /* Add your validation logic here if needed */ }}>
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-4 ">
              <div className="row mt-2">
                <div className="col-lg-6">Name</div>
                <div />
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input id="name" name='name' type="text" value={currentUser.name} />
                </div>
              </div>
              <div className="row">
                <div className="col text-danger" id="error-44" />
              </div>
              <div className="row mt-2">
                <div id="address" />
                <div className="col">Address</div>
              </div>
              <div className="row mt-2">
                <div className="col ">
                  <input id="address" type="text" value={currentUser.address} />
                </div>
              </div>
              <div className="row mt-2">
                <div />
                <div className="col">Phone</div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input id="phone" type="text" value={currentUser.phone} />
                </div>
              </div>
              <div className="row">
                <div className="col text-danger" id="error-8" />
              </div>
              <div className="row mt-2">
                <div />
                <div className="col">Email Address</div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input id="email" type="email" value={currentUser.email} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="col text-danger" id="error-9" />
              </div>
              <div className="row mt-5">
                <div id="additional" />
                <div className="col h5">Additional Information</div>
              </div>
              <div className="row mt-4">
                <div id="order" />
                <div className="col">Order Notes(optional)</div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input id="" type="text" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <Link
                    className="btn btn-out btn-primary btn-square btn-main mt-3"
                    to="/PAYMENT" onClick={handleConfirmOrder}
                  >
                    Make Purchase
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (<p>not available</p>)}

      <div className="col-lg-2" />
      <div className="col">
        <div className="  cardly card-body">
          <div className="row">
            <div className="col h3 font-weight-bold">Your Order</div>
          </div>
          <div className="row mt-2">
            <div className="col">Product</div>
            <div className="col">Subtotal</div>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="row mt-2 border-bottom">
              <div className="col mt-1">{item.name}</div>
              <div className="col ">${item.price}</div>
            </div>
          ))}
          {/* <ul className=''>
            {cartItems &&
              cartItems.map((item) => (
                <li key={item.id}>
                  {item.productname} - Quantity : {item.quantity} - Price : $
                  {item.price *item.quantity}
                </li>
              ))}
          </ul> */}
          <div className="row">
            <div className="col font-weight-bold">Total</div>
            <div className="col font-weight-bold">${total()}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">Have A Coupon?</div>
          <div className="col font-weight-bold ">
            Click Here To Enter Your Code
          </div>
        </div>
      </div>
      <div className="col-lg-1" />

      <Footer />
    </>
  );
}
