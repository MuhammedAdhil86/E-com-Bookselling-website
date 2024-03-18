import React from 'react'
import Navbar from '../components/navbar';
import  Footer from '../components/footer';
import { useEffect } from 'react';
import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export default function Category({addToCart}) {
  const {currentUser}= useAuth()
    const [Products, setProducts] = useState([]);
    const {Category} = useParams();
const navigate = useNavigate();
useEffect(()=>{

    fetch('http://127.0.0.1:8000/api/product/')
    .then(response => response.json())
    .then(data =>{
        const filtercategory = data.filter(item =>item.category_name === Category );
        setProducts(filtercategory);
    }
        )
        .catch(error => console.error('error:',error));

}

)

const handleAddToCart = (item) => {
  if (currentUser) {
    // Assuming addToCart is a function to add items to the cart
    addToCart(item);
    // Navigate to the cart page
    navigate("/CART");
  } else {
    // Redirect to the login page if the user is not authenticated
    // You might want to use the 'to' prop instead of 'href' in Link
    navigate("/SIGNIN");
  }
};

  return (
  <>

  
  <div className="row ml-5 mt-3 ">

{Products.map(item =>(
    <div className="col-lg-3  ">
      <div className="box ">
        <img
          src={item.image}
          style={{ width: 200, height: 260 }}
          className="  rounded mt-5"
        />
        <div className="card-title">
          <h5 className="card-h5">{item.name}</h5>
        </div>

     
          <p className="box-description">taki and mitsuha aesthetic luv story</p>
        <p className='book-price font-weight-bold'>${item.price}</p>
        <button
          className="bg-primary text-light p-2 rounded-pill text-decoration-none border-0"
          onClick={() => handleAddToCart(item)}
        >
          Add to cart
        </button>
      </div>
    </div>

))}

  
  </div>

<Footer/>
  
  </>
  )
}
