import React from 'react'

import Footer from '../components/footer';
import Conteiner from '../components/conteiner';
import Navbar  from '../components/navbar';


function shop({addToCart}) {
  
  return (
    <div>
      
        <div className="haed-all  ">
  <h1 className=" head text-center  text-primary ">All Products</h1>
  <p className=" haed-para text-center">Our Best Selling Books </p>
</div>

        <Conteiner addToCart={addToCart}/>
      
      <Footer/>
    </div>
  )
}

export default shop
