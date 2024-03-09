import React from "react";
import Carousel from "../Component/Carousel/Carousel.";
import NavPills from "../Component/Nav/NavPills";
import Products from "./Products";
import Offer from "../Component/offers/Offer";
import NewsBar from "../Component/news-bar/NewsBar";
import Testemonail from "../Component/testemonial/Testemonail";
const Home = () => {
    return (
        <div>
            <Carousel />
            <h3>Most Popular </h3>
            <NavPills />
            <Products/>
            <Offer/>
            <NewsBar/>
            <Testemonail/>
        </div>
    )
}

export default Home;