import React from 'react'
import picdalia from "../Media/dalia.jpg"
import picbasem from "../Media/basem.jpg"
import pic2 from "../Media//person2.jpg"
import pic11 from "../Media/person11.jpg"
import "./Testimonail.css"
const Testemonail = () => {
    return (
        <section id="testemonial" className="container mt-5 ">
            <div className=" title d-flex justify-content-center align-items-center ">
                <h2>TESTIMMONIAL</h2>
            </div>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Here From Our Viewers
            </p>
            <div id="carouselExampleIndicators" className=" carousel slide">
                <div className="carousel-inner w-70 mx-auto">
                    <div className="carousel-item active text-center">
                        <img
                            src={pic2}
                            className="client-img shadow-lg rounded-circle"
                            alt=""
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="client-feedback p-5">
                            <h4>Ahmed Hassan</h4>
                            <span className="text-muted">Senior Designer</span>
                            <div className="brdr" />
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                                explicabo eius eaque, aliquid officiis autem corporis at quos
                                ducimus reprehenderit est soluta omnis nulla saepe dolore.
                                Laboriosam sint rerum adipisci.
                            </p>
                        </div>
                    </div>
                    &lt;
                    <div className="carousel-item text-center">
                        <img
                            src={picdalia}
                            className="client-img shadow-lg rounded-circle"
                            alt=""
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="client-feedback p-5">
                            <h4>Dalia Badr</h4>
                            <span className="text-muted">DevOps Engineer</span>
                            <div className="brdr" />
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                                explicabo eius eaque, aliquid officiis autem corporis at quos
                                ducimus reprehenderit est soluta omnis nulla saepe dolore.
                                Laboriosam sint rerum adipisci.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item text-center">
                        <img
                            src={pic11}
                            className="client-img shadow-lg rounded-circle"
                            alt=""
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="client-feedback p-5">
                            <h4>Alissa Mark</h4>
                            <span className="text-muted">Testing Engineer </span>
                            <div className="brdr" />
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                                explicabo eius eaque, aliquid officiis autem corporis at quos
                                ducimus reprehenderit est soluta omnis nulla saepe dolore.
                                Laboriosam sint rerum adipisci.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item text-center">
                        <img
                            src={picbasem}
                            className="client-img shadow-lg rounded-circle"
                            alt=""
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="client-feedback p-5">
                            <h4>Basem Badr </h4>
                            <span className="text-muted">Information Security Manager</span>
                            <div className="brdr" />
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                                explicabo eius eaque, aliquid officiis autem corporis at quos
                                ducimus reprehenderit est soluta omnis nulla saepe dolore.
                                Laboriosam sint rerum adipisci.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-indicators position-static">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    >
                        <img
                            src={pic2}
                            alt=""
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        />
                    </button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    >
                        <img
                            src={picdalia}
                            alt=""
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        />
                    </button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    >
                        <img
                            src={pic11}
                            alt=""
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        />
                    </button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    >
                        <img
                            src={picbasem}
                            alt=""
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        />
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Testemonail