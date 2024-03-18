import React from 'react'
import '../components/checkout.css'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Checkout() {
  const navigate=useNavigate()
  const location=useLocation();
  const {products}= location.state ||{
    products:[],
  }
 const goToCart=()=>{
    navigate('/CART')
  }
 const goToPayment=()=>{
    navigate('/PAYMENT')
  }
  return (
    <div>
      

      <>
  
      <div className="check-wrapper">
  <div className="check-container">
    <form className='check-form' action="">
      <h1 className='check-h1'>
        <i className="fas fa-shipping-fast" />
        Shipping Details
      </h1>
      <div className="name">
        <div>
          <label htmlFor="f-name">First</label>
          <input type="text" name="f-name" />
        </div>
        <div>
          <label htmlFor="l-name">Last</label>
          <input type="text" name="l-name" />
        </div>
      </div>
      <div className="street">
        <label htmlFor="name">Street</label>
        <input type="text" name="address" />
      </div>
      <div className="address-info">
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" name="state" />
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <input type="text" name="zip" />
        </div>
      </div>
      <div className="btnsc">
        <button className='btnc'onClick={goToPayment}>Purchase</button>
        <button className='btnc'onClick={goToCart}>Back to cart</button>
      </div>
    </form>
  </div>
</div>
</>




    </div>
  )
}
