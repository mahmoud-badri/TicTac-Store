import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getItems, getCategory } from "../../Redux/ItemAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./Nav.css";

const NavPills = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const categories = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "tops",
    ];

    useEffect(() => {
        dispatch(getItems()); 
    }, [dispatch]);

    const handleCategoryClick = (category) => {
        dispatch(getCategory(category));
        history.push("/CategoryProduct", { category });
    };

    return (
        <div className="container">
            <ul
                className="nav nav-pills nav-fill bg-primary bg-opacity-25 m-5"
                id="pills-tab"
                role="tablist"
            >
                {categories.map((category, index) => (
                    <li key={index} className="nav-item">
                        <Link to="#" onClick={() => handleCategoryClick(category)}>
                            <button className="nav-link active btn-pill" type="button">
                                {category}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavPills;