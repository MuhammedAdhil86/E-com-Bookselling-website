import React from 'react'

export default function Customer_review() {
  return (
    <div>
      <>

  <div className="review-box">
    <div className="row">
      <div className="col-lg-4  mt-5" style={{ height: 200 }}>
        <div className="review ">
          <h2 className=" text-primary">
            Customer
            <br />
            Reviews
          </h2>
        </div>
      </div>
      <div className="col-lg-4 " style={{ height: 200 }}>
        <div className="review">
          <div className="star">
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
          </div>
          <p className="mt-3">
            'A review from a customer who benefied from your product.Reviews can
            be a highly effective why of establishing creabidiity and increasing
            your company's reputation'.
          </p>
          <p className="font-weight-bolder">Captain Levi</p>
        </div>
      </div>
      <div className="col-lg-4 bg-primary " style={{ height: 200 }}>
        <div className="review  ">
          <div className="star">
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
            <img src="../image/icon-all/star-gold.png" style={{ width: 16 }} />
          </div>
          <p className="mt-3">
            'A review from a customer who benefied from your product.Reviews can
            be a highly effective why of establishing creabidiity and increasing
            your company's reputation'.
          </p>
          <p className="font-weight-bolder">Rainer</p>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
