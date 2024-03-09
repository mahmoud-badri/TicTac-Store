// Navbar.js
import React from "react";
import './Nav.css'
const Menu = () => {
    return (
        <>
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* ... Left links ... */}
                <ul className="navbar-nav me-3">
                    <li className="nav-item">
                        <a
                            className="nav-link active d-flex align-items-center"
                            aria-current="page"
                            href="#"
                        >
                            <i className="fas fa-bars pe-2" />
                            TicTac
                        </a>
                    </li>
                </ul>
                {/* ... Left links ... */}
            </div>
        </>
    );
}

export default Menu;
