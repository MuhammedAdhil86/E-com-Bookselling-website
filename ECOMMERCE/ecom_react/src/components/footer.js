import React from 'react'
import '../components/footer.css'
export default function Footer() {
  return (
    
      <>

<div className="  footer pb-5 mt-5" >
  <h2 className=" pt-5 ml-5  text-primary ms-4">Join Our Newsletter</h2>
  <div className="email-button mt-5 d-flex align-items-center  ">
    <div className="email ml-5  ms-3">
      <input
        type="email"
        placeholder="YOUR EMAIL"
        className=" form-control border-0 rounded-0  bg-transparent  line"
      />
    </div>
    <div className="email-button-button ">
      {" "}
      <a href="#" className="btn btn-primary rounded-pill ms-4 ">
        Shop Now
      </a>
    </div>
  </div>
  <div className="icons ml-5 mt-3  ">
    <img
      src="../image/icon-all/facebook-app-symbol.png"
      style={{ width: 20 }}
    />
    <img
      src="../image/icon-all/instagram.png"
      style={{ width: 20 }}
      className="ml-2"
    />
    <img
      src="../image/icon-all/twitter.png"
      style={{ width: 20 }}
      className="ml-2"
    />
  </div>
</div>
  
</>


  
  )
}
