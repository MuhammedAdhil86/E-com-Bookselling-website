import React, { useState } from 'react';
import '../components/cart.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default function Cart({ cartItems, setCartItems }) {
  const [updatedCartItems, setUpdatedCartItems] = useState(
    cartItems.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleRemoveItem = (itemId) => {
    const updatedCart = updatedCartItems.filter((item) => item.id !== itemId);
    setUpdatedCartItems(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);

    setUpdatedCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateOverallTotal = () => {
    const totalWithoutDiscount = updatedCartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );

    const discount = 10; // Assuming a fixed discount of $10

    return {
      totalWithoutDiscount,
      discount,
      total: totalWithoutDiscount - discount,
    };
  };

  return (
    <div>

      <div className="container mt-5">
        <div className="row cart">
          <aside className="col-lg-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={120}>
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-right d-none d-md-block"
                        width={200}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatedCartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <figure className="itemside align-items-center">
                            <div className="aside">
                              <img
                                src={item.image}
                                className="img-sm"
                                alt={item.name}
                              />
                            </div>
                            <figcaption className="info">
                              <Link
                                to="#"
                                className="title text-dark books-name"
                                data-abc="true"
                              >
                                {item.name}
                              </Link>
                              <p className="small books-description">
                                page:323 <br /> Anime
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <p>
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <span style={{ padding: '10px' }}>
                              {item.quantity}
                            </span>
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </p>
                        </td>
                        <td>
                          <div className="price-wrap mt-5">
                            <var className="price">
                              {calculateItemTotal(item)}
                            </var>{' '}
                            <small className="font-weight-bold">
                              ${item.price} each
                            </small>{' '}
                          </div>
                        </td>
                        <td className="text-right d-none d-md-block mt-5">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="btn btn-primary"
                            data-abc="true"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="c-card mb-3">
              <div className="c-card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control coupon"
                        name=""
                        placeholder="Coupon code"
                      />
                      <span className="input-group-append">
                        <button className="btn btn-primary btn-apply coupon">
                          Apply
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="c-card">
              <div className="c-card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right ml-3">
                    ${calculateOverallTotal().totalWithoutDiscount}
                  </dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right text-danger ml-3">
                    - ${calculateOverallTotal().discount}
                  </dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right text-dark b ml-3">
                    <strong>${calculateOverallTotal().total}</strong>
                  </dd>
                </dl>
                <hr />{' '}
                <Link
                  to={{pathname:"/CHECKOUTFORM",state:{products:cartItems},}}
                  className="btn btn-out btn-primary btn-square btn-main mt-3"
                >
                  Make Purchase
                </Link>
                <Link
                  to="/SHOP"
                  className="btn btn-out btn-success btn-square btn-main mt-2"
                  data-abc="true"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
