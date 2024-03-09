import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer
                className="text-center text-lg-start bg-body-tertiary text-muted"
                id="foot"
            >
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark opacity">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter social" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google social" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram social" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin social" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github social" />
                        </a>
                    </div>
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />
                                    TicTac STORE
                                </h6>
                                <p>
                                    الفرع الرئيسي : مدينة نصر – ٤ مصطفي النحاس – تقاطع عباس العقاد
                                    امام النساجون الشرقيون . الفرع الثاني : الشيخ زايد – شل اوت 2 –
                                    امام مدينة الخمائل بجوار مسجد الشرطة محور ٢٦ يوليو المركزي . الفرع
                                    الثالث : الإسكندرية – ٢٦٧ طريق الجيش – امام كوبري ستانلي .
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Smart Phone
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Laptop
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Skincare
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Tops
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <i className="fas fa-home me-3" /> Cairo, NY 10012, Egypt
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    TicTac@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" /> + (02)01099976753{" "}
                                </p>
                                <p>
                                    <i className="fas fa-print me-3" /> + (02)01122070264
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="https://TicTac.com/">
                    TicTac.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
        </>

    )
}

export default Footer