import React from 'react'
import '../components/signin.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import {useAuth} from '../components/AuthContext'
import { useState } from 'react'
import axios  from 'axios';
function Signin() {
  const [isEmptyData, setIsEmptyData] = React.useState(false);

  const navigate=useNavigate();
  const emailref =useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error , setError] =useState()
  const onsubmit = async(e) =>{
    e.preventDefault();
    if(!emailref.current.value || !passwordRef.current.value){
      setIsEmptyData(true);

      return;
    }
    const formData = new FormData();
    formData.append("email", emailref.current.value);
    formData.append("password" , passwordRef.current.value);
     try{
       const response=await axios.post("http://localhost:8000/api/user/login/" ,formData);
       const user=response.data.user
       if(user && user.email === emailref.current.value){
        login(user)
        navigate("/")
        

       }else{
          setError("email error")
        }

  }catch(error){
    setError("login error")
    console.log(error);
  }
}
  return (
    <>


    <div className="container ps-md-0 mt-5">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4 font-weight-bold text-primary">Welcome back to anime world !</h3>
              {/* Sign In Form */}
              <form onSubmit={onsubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    placeholder="name@example.com"
                    ref={emailref}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                
                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type='submit'
                  >
                    Sign in
                  </button>
                  <div className="text-center">
                    <p>Already have an account?</p>
                    <Link className="" to="/SIGNUP">
                    signup
                    </Link>
                  </div>
                </div>
              </form>
              {isEmptyData && (
        <div className="alert alert-danger mt-3" role="alert">
          Please fill in all the required fields.
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    
    
    </>
  )
}

export default Signin
