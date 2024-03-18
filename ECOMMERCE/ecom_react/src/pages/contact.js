import React from 'react'
import '../components/contact.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <div>


  <div className="main d-flex ">
    <div className=" ist-image">
      <img
        src="../image/card-all/free-photo-happy-mothers-day-mom-child-love-background-wallpaper_1340-30814.jpg"
        className=" mt-5 "
      />
    </div>
    <div className=" contact-us">
      <h3>Contact Us</h3>
      <p>
        Fill out the form below and we will contact you as soon <br />
        on possibile
      </p>
      <div className="row ">
        <div className="col">
          <input className="your-name" type="text" placeholder="Your Name" />
        </div>
        <div className="col">
          <input className="your-email" type="text" placeholder="Your Email" />
        </div>
        <div className="row">
        <div className="col-lg-6 ml-3">
          <select className="topics mt-3">
            <option>Choose Topic</option>
          </select>
        </div>
        <div className="col-lg-16 ml-3">
          <input type="text" placeholder="Message" className="message mt-3" />
        </div>


        <div className="row">
        <div className="col-lg-12 ml-3">
          <button
            type="button"
            className="btn btn-primary btn-sm rounded-pill pl-5 pr-5 mt-4 ml-3"
          >
            Sent
          </button>
        </div>
      </div>

      </div>
     



      </div>
   
   
    </div>
  </div>



  
  <div className="container">
    <h4 className="text-center mt-5">Featured Products</h4>
    <div className="row ">
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/goku---.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Dragon Ballz </h5>
          </div>
          <p>$89.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/jujutsu-kaisen-007.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Jujutsu Kaisen</h5>
          </div>
          <p>$79.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/bleach.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Bleach</h5>
          </div>
          <p>$109.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/Someone's Gaze.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Someone's Gaze</h5>
          </div>
          <p>$79.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/Blood of Zeus.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Blood of Zeus</h5>
          </div>
          <p>$99.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <img
            src="../image/card-all/Aoashi.jpg"
            style={{ width: 300, height: 420 }}
            className="mt-4"
          />
          <div className="card-title">
            <h5 className="card-h5">Aoashi</h5>
          </div>
          <p>$109.00</p>
          <a
            className="bg-primary text-light p-2 rounded-pill text-decoration-none"
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
<Footer/>



    



    </div>
  )
}
