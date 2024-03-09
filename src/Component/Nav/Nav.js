// Nav.js
import React from "react";
import Menu from "./Menu";
import FormSearch from "./FormSearch";
import Sign from "./Sign";
import './Nav.css'
const Nav = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* Container wrapper */}
                <div className="container">

                    {/* Toggle button */}
                    <Menu/>
                        {/* Left links */}
                    <FormSearch/>
                        {/* form className="d-flex align-items-center w-100 form-search */}
                    
                        <Sign/>
                        
                    </div>
                    {/* Collapsible wrapper */}

                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    );
}

export default Nav;
