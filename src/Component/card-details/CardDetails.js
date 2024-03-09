import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./CardDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart-Slice";
const CardDetails = (props) => {
    const {
        images,
        title,
        description,
        price,
        rating,
        brand,
        addProduct,
    } = props.item || {};

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (images && images.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, [currentImageIndex, images]);

    const addToCartHandler = () => {
        addProduct(props.item);
    };

    return (
        <div className="card-container card-details">
            <div className="row g-0">
                <div className="col-md-6 col-img">
                    {images && images.length > 0 && (
                        <div className="img-container">
                            <img
                                src={images[currentImageIndex]}
                                alt="product"
                                className="img-fluid"
                            />
                        </div>
                    )}
                </div>
                <div className="col-md-6 col-info">
                    <h3 className="card-title title-content">{title}</h3>
                    <p className="card-text descrip">{description}</p>
                    <p className="card-text">Price: $<span>{price}</span></p>
                    <p className="card-text">
                        Rating:{" "}
                        <span>{rating}</span>
                        <i className="fa-solid fa-star fa-lg rating-star"></i>
                    </p>

                    <p className="card-text">Brand: <span>{brand}</span></p>
                    <button className="btn btn-danger btn-details" onClick={addToCartHandler}>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;