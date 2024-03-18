import { Carousel } from 'react-bootstrap'
import React from 'react'
import'../components/session.css';
import { Link } from 'react-router-dom';
function Session() {
  return (
<>
<>
 
  
    {/* <div className="row mt-5">
      <div className="col-6">
        <div className="card">
          <img
            src="../image/card-1st/wallpaperflare.com_wallpaper (1).jpg"
            className="mt-3 rounded"
          />
        </div>
      </div>
      <div className="col lg-6">
        <div className="card ">
          <div className="card ml-5 mt-5  ">
            <h1 className="card-title vw-2 ml-5 text-primary font-weight-bold ">
              Anime books/manga
            </h1>
            <p className="text ml-5">
              Manga is a Japanese form of art that uses a unique visual style to
              tell stories. <br /> is an overall term used for a wide range of
              graphic novels and comic books that originated in Japan.
            </p>
            <div className=" ml-5">
              {" "}
              <a
                href="../html/all-products.html"
                className="btn btn-primary rounded-pill pl-4 pr-4"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}





    {/* <div className='row mt-5'>
        <div className='col-1 mt-5'></div>
        <div className='col-5 mt-5 top_banner '></div>
        <div className='col-5 mt-5 d-flex flex-column justify-content-center'>
            <h1 className='text-center card-title vw-2 ml-5 text-primary font-weight-bold'>Anime books/manga</h1>
            <p className=" pt-2 text-center ">
              Manga is a Japanese form of art that uses a unique visual style to
              tell stories. <br /> is an overall term used for a wide range of
              graphic novels and comic books that originated in Japan.
            </p> 



            <div className=" ml-5 buttonshope">
              {" "}
              <a
                href="../html/all-products.html"
                className="btn btn-primary rounded-pill pl-4 pr-4"
              >
                Shop Now
              </a>
            </div>

        </div>


       



    </div> */}




<div className="row mt-5 card-img">
    
  <div className="col-lg-6 ">
    <Carousel>
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
        <div className="w-100 border-0 ms-4 mt-4">
      <img
        src="https://wallpapercave.com/wp/wp6909259.jpg"
        className="mt-3 rounded w-100"
      />
    </div>
        </Carousel.Item>

    </Carousel>
  </div>


  <div className="col lg-6 ">
    
      <div className="card-session   ">
        <h1 className=" session-head vw-2 ml-5 text-primary font-weight-bold ">
          Anime books/manga
        </h1>
        <p className="session-p text ml-5">
          Manga is a Japanese form of art that uses a unique visual style to
          tell stories. <br /> is an overall term used for a wide range of
          graphic novels and comic books that originated in Japan.
        </p>
        <div className=" ml-5 mt-5">
          {" "}
          <Link
            to="/SHOP"
            className="btn btn-primary rounded-pill pl-4 pr-4"
          >
            Shop Now
          </Link>
        </div>
      </div>
    
  </div>
</div>




  

</>

</>
  )
}

export default Session
