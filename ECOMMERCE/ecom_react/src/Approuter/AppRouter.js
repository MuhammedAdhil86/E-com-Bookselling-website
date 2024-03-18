import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Shop from '../pages/shop'
import Contact from '../pages/contact'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import Singleproduct from '../pages/singleproduct'
import Payment from '../pages/Payment'
import Checkoutform from '../pages/checkoutform'
import Signin from '../pages/signin'
import Signup from '../pages/signup'
import About from '../pages/about '
import Category from '../pages/category'
import { AuthProvider } from '../components/AuthContext'
import { useState } from 'react'
import Navbar from '../components/navbar'
import { useEffect } from 'react'
import ProductSearch from '../pages/ProductSearch'
import Order from '../pages/order'
import Updated from '../pages/updated'





export default function AppRouter() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/product/') ;
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (!searchTerm) {
      setFilteredProducts([]);
      return;
    }
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // AppRouter component
const handleQuantityChange = (itemId, newQuantity) => {
  newQuantity = Math.max(1, newQuantity);

  setCartItems((prevCartItems) =>
    prevCartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    )
  );
};

    


  const addToCart = (item,quantity=1) => {
    setCartItems((prevCartItems) => [...prevCartItems, {...item,quantity}]);}
  
  return (
  
<AuthProvider>
<BrowserRouter>
<Navbar  onSearch={handleSearch}/>
<ProductSearch filteredProducts={filteredProducts}/>

     < Routes>
    { < Route path='/' element={<Home/>}/>}
    {< Route path='/SHOP' element={<Shop addToCart={addToCart}/>}/> }
    {< Route path='/CONTACT' element={< Contact/>}/>}
    // AppRouter component
    <Route path='/CART' element={<Cart cartItems={cartItems} setCartItems={setCartItems} handleQuantityChange={handleQuantityChange} />} />
    {< Route path='/CHECKOUT' element={< Checkout cartItems={cartItems}/>}/>}
    {< Route path='/CHECKOUTFORM' element={< Checkoutform cartItems={cartItems}/>}/>}
    

    {<Route path ='/SINGLE' element={<Singleproduct/>}/>}
    {<Route path='/PAYMENT/:userId/:userSessionToken/:totalPrice' element={<Payment/>}/>}
    {<Route path='/SIGNIN' element={<Signin/>}/>}
    {<Route path='/SIGNUP' element={<Signup/>}/>}
    {<Route path='/UPDATED' element={<Updated/>}/>}
    {<Route path='/ABOUT' element={<About/>}/>}
    {<Route path='/ABOUT' element={<About/>}/>}
    {<Route path='/ORDER' element={<Order/>}/>}
    {<Route path='/CATEGORY/:Category' element={<Category addToCart={addToCart} />} />}

     </Routes>
      
      </BrowserRouter>

</AuthProvider>

    
  )
}
