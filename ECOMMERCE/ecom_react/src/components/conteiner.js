import React from 'react'
import '../components/conteiner.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from './AuthContext';


export default function Conteiner({addToCart}) {
  // const navigate = useNavigate();
  const {currentUser} =useAuth();
  console.log(currentUser);
  // const handleAddToCart =(item)=>{
  //   if (currentUser){
  //    addToCart = (item);
  //   navigate("/cart");    }
  // }




  const [data, setData] = useState([]);
const navigate = useNavigate();

useEffect(()=> {

  fetch('http://127.0.0.1:8000/api/product/')
  .then(response => response.json())
  .then((data) => {setData(data);})
  .catch(error=>console.error('error:',error));
},[])

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

{data.map(item =>(
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

     
          <p className="box-description">{item.discription}</p>
        <p className='book-price font-weight-bold'>${item.price}</p>
        <button   onClick={() => handleAddToCart(item)}

          className="bg-primary text-light p-2 rounded-pill text-decoration-none border-0"
         
        >
          Add to cart
        </button>
      </div>
    </div>

))}

  
   


    
  






  </div>





</>


    
  )
}
