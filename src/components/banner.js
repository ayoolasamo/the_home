import React from "react";
import house from "../images/house.PNG";

const Banner = () => {
    return (
        <div className="row banner" style={{ width: "100%" }}  >
            <div className="col-md-1"></div>
            <span className="bannerwriting col-md-4">Find Your Best Smart<span id="themewriting"> Real Estate</span></span>

            <img src={house} className="col-md-6 m-auto" style={{ width: "45%" }} alt="property"></img>

        </div>

    )
}

export default Banner;