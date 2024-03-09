import React from 'react'
import macOffer from "../Media/mac.png"
import "./offers.css"
const Offer = () => {
    return (
        <div className="container container-sale position-relative mt-5">
            <div className="sale d-flex flex-column flex-md-row justify-content-around align-items-center py-5">
                <img src={macOffer} alt="" width={400} height={300} />
                <span className="discount ">
                    <del style={{ marginLeft: 10, color: "white" }}>340.000$</del>
                    <p style={{ textAlign: "center", color: "white" }}>240.000$</p>
                </span>
                <div>
                    <h4>
                        New MacBook <span>Air 13</span>
                    </h4>
                    <h2>
                        <span className='descrip-offer'>High-Performance</span>
                    </h2>
                    <h4>to Meet Your Highest Expectations</h4>
                    <button className="btn btn-danger">
                        <i className="fa-solid fa-arrow-left" /> SHOP NOW{" "}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Offer