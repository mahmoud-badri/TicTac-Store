import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "../Redux/ItemAction";
import CardDetails from "../Component/card-details/CardDetails";
import { useEffect } from "react";
import { addToCart } from "../Redux/Cart-Slice";
import "./products.css";

const OnePrduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state) => state.combinItems.selectedItem);

    useEffect(() => {
        dispatch(getItemById(id));
    }, [dispatch, id]);

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container container-one">
            <CardDetails
                item={{
                    ...item,
                    addProduct: addProductToCart,
                }}
            />
        </div>
    );
};

export default OnePrduct;