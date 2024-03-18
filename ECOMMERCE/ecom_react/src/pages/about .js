import React from 'react'
import Navbar  from '../components/navbar'
import Footer from '../components/footer'
import "../components/about.css"

export default function About () {
  return (
   <>

   <div className='conteiner-fluid'>

   <>
  <div className="conteiner-fluid mt-5">
    <div className="row mt-2">
      <div className="col lg-6">
        <div className=" box-model card-lsx ">
          <img src="../image/card-au/108249.jpg" className="main-box" />
        </div>
      </div>
      <div className="col lg-6 " style={{ height: 410 }}>
        <div className="-card  ">
          <div className="card ml-5 mt-5 border-0 " style={{ height: 365 }}>
            <h2 className="card-title vw-2 ml-5  ">About Us</h2>
            <p className="text ml-5" style={{ width: 350 }}>
              {" "}
              Eren Private Limited. It’s great to know that your company
              specializes in anime books. Anime books are a great way to explore
              the world of anime and manga, and they have become increasingly
              popular in recent years. Your company’s focus on this niche market
              is a smart move, and I hope that it will lead to great success for
              your business
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row second ml-">
      <div className="col lg-6">
        <div className=" card-box-main card border-0 ">
          <div className=" card-box card ml-5 mt-5  border-0 ">
            <h2 className="card-title vw-2 ml-5  ">Our Vision</h2>
            <p className="text ml-5" style={{ width: 350 }}>
              {" "}
              Eren Private Limited. It’s great to know that your company
              specializes in anime books. Anime books are a great way to explore
              the world of anime and manga, and they have become increasingly
              popular in recent years. Your company’s focus on this niche market
              is a smart move, and I hope that it will lead to great success for
              your business
            </p>
          </div>
        </div>
      </div>
      <div className="col lg-6   " style={{ width: 100, height: 380 }}>
        <div className="box-2 card  border-0 " style={{ width: 658, height: 370 }}>
          <img
            src="../image/card-all/jujutsu-kaisen-4k-the-first-anniversary-xmarejqwtfvngux3.jpg"
            className=""
          />
        </div>
      </div>
    </div>
  </div>
</>


   </div>
   <Footer/>
   </>
  )
}
