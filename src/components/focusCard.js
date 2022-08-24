import React from "react";


const Focuscard =({icon,heading,text})=>{
   
    return(
        <div className="col-md-3 col-sm-4 focuscard">
            <div className="icon">
                <img src={icon} alt="icon"/>
            </div>
            <p style={{color:"black" ,fontWeight:"bold", fontSize:"1.3rem"}}>{heading}</p>
            <p>{text}</p>
            <button className="focusbtn"> More</button>
        </div>

)
}
export default Focuscard;