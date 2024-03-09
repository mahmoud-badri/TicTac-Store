import React from "react";
import './cards.css'

import { addToCart } from "../../Redux/Cart-Slice";
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const MyCard = (props) => {


    //--------------------------------------------------------------------------------------
    const dispatch = useDispatch()

    const history = useHistory();


    //const handleAddCartClick = () => {

        //dispatch(addToCart(props.item));

        //history.push("/cart");

    //};
    //--------------------------------------------------------------------------------------


    return (

        <div className="card">
            <img className="card-img-top" src={props.image[0]} alt="product" />
            <div className="card-body">
                <Link to={props.path} className="title-link">
                    <h3 className="card-title">{props.title}</h3>
                </Link>
                <div className="rating-stars">
                    <i className="fa-solid fa-star fa-lg rating-star"></i>
                    <i className="fa-solid fa-star fa-lg rating-star"></i>
                    <i className="fa-solid fa-star fa-lg rating-star"></i>
                    <i className="fa-solid fa-star fa-lg rating-star"></i>
                </div>
                <p className="card-text">${props.price}</p>
                <button className="btn btn-danger" onClick={() => dispatch(addToCart(props.addProduct))}>Add Cart</button>
            </div>
        </div>

    );
};

export default MyCard;  