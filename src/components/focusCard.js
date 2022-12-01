import React from "react";


const Focuscard = ({ icon, heading, text }) => {

    return (
        <div className=" col-12  my-2 col-lg-3 col-md-9 my-4 focuscard">
            <div className="icon">
                <img src={icon} alt="icon" />
            </div>
            <p style={{ color: "black", fontWeight: "bold", fontSize: "1.3rem" }}>{heading}</p>
            <p>{text}</p>
            <button className="focusbtn"> More</button>
        </div>

    )
}
export default Focuscard;