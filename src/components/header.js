import React from "react";
import { NavLink } from "react-router-dom";



const Header =()=>{
return(
    
    <div className="Row">
        <div className="navbar col-md-12">
            <div className="col-md-3 logowriting" >The<span id="themewriting">Hom</span></div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="col-md-1"></div>
           <button className="col-md-1 headerbtn">SIGN</button>
           <div className="col-md-1"></div>

        </div>
    </div>
)
}

export default Header;