import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { useAuth } from './AuthContext'
import axios from 'axios'
import { useState } from 'react'

function Navbar({onSearch}) {



  const {currentUser,logout}=useAuth()
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleLogout=()=>{
    const userId=currentUser.id 
    axios.get(`http://localhost:8000/api/user/logout/${userId}`)
    logout()
    navigate('/')
  }
  return (
    <>
    
    
    <div className="conteiner-fluid  shadow font-weight-bold ">
    <div className="row  pb-3">

<div className='col-lg-1'>
<img
          className="ml-4 "
          src="../image/logo-1st/Screenshot_2023-11-10_115045-removebg-preview.png"
          width={80}
        />
       

</div>





      <div className="col-lg-3 mt-2   ">
      <input className='ms-3 mt-3  rounded-5 border-0'
        type="text"
        placeholder=" Search products"
        value={searchTerm}
        onChange={handleSearch}
      />

      </div>
      <div className="col-lg-6 ">
        <ul className="nav ml-5 mt-2 ">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            
            
            
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/SHOP">
              Shop
            </Link>
          </li>
          <li className="h-nav nav-item">
            <Link className="h-nav nav-link" to="/ABOUT">
              About us
            </Link>
          </li>
          <li className="h-nav nav-item">

            <Link className="h-nav nav-link" to="/CONTACT">
              Contact
            </Link>
          </li>


          <li>
          <Link to={'/CART'} className="h-nav nav-item nav-link">
            Cart
          </Link>
          </li>
          {currentUser ?(null):(<>
            <li className="h-nav nav-item">
            <Link className="h-nav nav-link " to="/SIGNIN">Signin</Link>
          </li>
        
          </>)}
          
          
        </ul>
       
      </div>

      <div className='col-1 mt-3'> {currentUser ? (<><span className="text-primary dropdown-toggle  "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">Welcome, {currentUser.name}</span>
                  <div className="dropdown-menu border-0 " aria-labelledby="navbarDropdown">
                  <span className="dropdown-item h-nav nav-link nav-item bg-primary text-light" onClick={handleLogout}>
                    Logout
                  </span>
                  <Link to="/ORDER">
                  <span className="dropdown-item h-nav nav-link nav-item bg-primary text-light">
                    Order
                  </span>
                  </Link>
                  <Link to={'/UPDATED'}>
                  <span className="dropdown-item h-nav nav-link nav-item bg-primary text-light">
                    Update
                  </span>
                  </Link>
                  {/* Add other dropdown items as needed */}
                </div></>):null}
                  </div>
    </div>
  </div>
</>

    
    
  )
}

export default Navbar
