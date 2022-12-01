import React from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="">
            <div className="navbar navbar-expand-lg  ">
                <div className="nav-brand logowriting px-5" >The<span id="themewriting">Hom</span></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="navbar-nav m-auto ">
                        <NavLink className="my-auto" to="/">Home</NavLink>
                        <NavLink className="my-auto" to="/about">About</NavLink>
                        <NavLink className="my-auto" to="/service">Service</NavLink>
                        <NavLink className="my-auto" to="/blog">Blog</NavLink>
                        <NavLink className="my-auto" to="/contact">Contact</NavLink>

                    </div>
                    <button className=" headerbtn " >SIGN </button>
                </div>
            </div>
        </div>
    )
}

export default Header;