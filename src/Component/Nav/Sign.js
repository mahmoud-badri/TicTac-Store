import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Sign = () => {
    const cart = useSelector((state) => state.cart);

    const cartNumberStyle = {
        width: '26px',
        background: 'rgb(76 175 80 / 30%)',
        borderRadius: '100%',
        padding: '5px 8px',
        color: 'rgb(255, 255, 255)',
        marginLeft: '2px',
        height: '26px',
        fontSize: '14px',
        fontWeight: 'bolder',
        textAlign: 'center',
        position: 'absolute',
        right: '27%',
        top: '14px',
    };

    const logout= () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }

    const deleteAccount= () => {
        localStorage.clear ()
        window.location.reload()
    }

    return (
        <div>
            <ul className="navbar-nav ms-3">
                <li className="nav-item">
                    <Link to="/Cart" className="nav-link d-flex align-items-center me-3">
                        <i className="fas fa-bookmark pe-2" /> Watchlist
                        <span style={cartNumberStyle}>{cart.length}</span>
                    </Link>
                </li>
                <li className="nav-item me-3" style={{ width: 100 }} onClick={logout}>
                    <Link to="/SignLogin" className="nav-link d-flex align-items-center logout" >
                        Log Out
                    </Link>
                </li>
                <li className="nav-item" style={{ width: 100 }} onClick={deleteAccount}>
                    <Link to="/SignLogin" className="nav-link d-flex align-items-center delete">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sign;
