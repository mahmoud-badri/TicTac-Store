import React from 'react'

import pic2 from "../Media/apple3.jpeg"
import pic3 from "../Media/hp.svg.png"
import pic4 from "../Media/dell.jpg"
import pic5 from "../Media/sams.png"
import "./NewBar.css"
const NewsBar = () => {
    return (
        <div className="container news-bar">
            <div className="news-item">
                <img
                    className="img-bar"
                    src={pic2}
                    alt=""
                    style={{ margin: "0 100px 0 100px" }}
                />
                <img
                    className="img-bar"
                    src={pic3}
                    alt=""
                    style={{ margin: "0 100px 0 100px" }}
                />
                <img
                    className="img-bar"
                    src={pic4}
                    alt=""
                    style={{ margin: "0 100px 0 100px" }}
                />
                <img
                className="img-bar"
                src={pic5}
                alt=""
                style={{ margin: "0 100px 0 100px" }}
            />
            </div>
        </div>

    )
}

export default NewsBar