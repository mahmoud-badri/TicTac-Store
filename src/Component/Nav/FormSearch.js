import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../Redux/SearchAction";
import { useHistory } from "react-router-dom";
import { getItems, getCategory } from "../../Redux/ItemAction";

const FormSearch = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const history = useHistory();
    const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops"];

    useEffect(() => {
        dispatch(getItems()); // Fetch initial items
    }, [dispatch]);

    const handleCategoryClick = (category) => {
        dispatch(getCategory(category));
        // Redirect to CategoryProduct page and pass the category as an object
        history.push("/CategoryProduct", { category }); 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(searchAction(term));
        history.push("/SearchPage");
        setTerm("");
    };

    return (
        <>
            <form
                onSubmit={submitHandler}
                className="d-flex align-items-center w-100 form-search"
            >
                <div className="input-group">
                    <button
                        className="btn btn-light dropdown-toggle shadow-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ paddingBottom: "0.4rem" }}
                    >
                        All
                    </button>

                    <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link
                                    className="dropdown-item"
                                    to="#"
                                    onClick={() => handleCategoryClick(category)}
                                >

                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
                <Link to="#!" className="text-white">
                    <i onClick={submitHandler} className="fas fa-search ps-3" />
                </Link>
            </form>
        </>
    );
};

export default FormSearch;