import React, { useEffect, useState } from "react";
import MyCard from "../Component/cards/MyCards";
import './products.css'
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../Redux/ItemAction";

const Products = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.combinItems.items);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);



    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {items.map((item) => (
                    <div className="card-container" key={item.id}>
                        <MyCard
                            image={item.images}
                            title={item.title}
                            path={`/OnePrduct/${item.id}`}
                            price={item.price}
                            addProduct = {item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;