import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from '../Media/Logo2.png'
import './Nav.css'

const Brand = () =>{
    return(
        <Link className="navbar-brand" to="/">
                        <img
                            id="MDB-logo"
                            src= {Logo}
                            alt="MDB Logo"
                            width={100}
                            height={50}
                        />
                    </Link>
            
    )
}

export default Brand