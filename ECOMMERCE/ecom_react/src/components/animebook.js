import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../components/animebook.css'
import { Link } from 'react-router-dom';


export default function Animebook() {
  return (
    <>


 

<div className="container ">
  <div className="row mt-4 ">
    <div className="col-lg-8  ">
    <div className="col lg-5 ">
      <Carousel className="carousel">
          <Carousel.Item interval={3000}>
          <div className="w-100 border-0 ms-4 mt-4">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
          className="mt-3 rounded w-100"
        />
      </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
          <div className="w-100 border-0 ms-4 mt-4">
        <img
          src="https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg"
          className="mt-3 rounded w-100"
        />
      </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
          <div className=" border-0 ms-4 mt-4">
        <img
          src="https://wallpapercave.com/wp/wp6909259.jpg"
          className="mt-3 rounded w-100"
        />
      </div>
          </Carousel.Item>
  
      </Carousel>
    </div>
    </div>


    <div className="col mt-4 mr-3">
      <div className="row ">
        <div className="col h1 text-primary font-weight-bold">Anime Books</div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Dive into a world where pixels pulse with
            <br /> magic, and heroes.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="font-weight-bold">$100.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <input type="number" placeholder="" />
        </div>
      </div>
      <div className="row">
        <Link
          className="bg-primary text-light pl-3 pr-3 rounded-pill mt-3 ml-3 pt-1 pb-1"
       to="/CART"
        >
          Add to cart
        </Link>
      </div>
      <div className="row ">
        <div className=" font-weight-bold h6 mt-3 ml-3 text-primary">
          Different Edition{" "}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-4">
          <img
            src="../image/card-all/kimi-3-slide.jfif"
            width={100}
            height={100}
          />
        </div>
        <div className="col-lg-4">
          <img
            src="../image/card-all/kimi-2-slide.jfif"
            width={100}
            height={100}
          />
        </div>
        <div className="col-lg-4">
          <img
            src="../image/card-all/kimi-1-slide.jfif"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col h6 font-weight-bold mt-1 text-primary">Ratings</div>
      </div>
      <div className="row  ">
        <div className="col-lg-1">
          <img src="../image/icon-all/star-gold.png" width={16} />
        </div>
        <div className="col-lg-1">
          <img src="../image/icon-all/star-gold.png" width={16} />
        </div>
        <div className="col-lg-1">
          <img src="../image/icon-all/star-gold.png" width={16} />
        </div>
        <div className="col-lg-1">
          <img src="../image/icon-all/star-gold.png" width={16} />
        </div>
      </div>
    </div>
  </div>
  <div className='row mt-4'>
  <div className='col-lg-12 text-center text-primary font-weight-bold h2 mt-3'>Related Products</div>
  </div>   
</div>



</>
  )
  }
 




    
  

