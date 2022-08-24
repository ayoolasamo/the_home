import React from "react";
import homeicon from "../images/homeicon.PNG"
import Focuscard from "./focusCard";
const Focus =()=>{
    return(
        <div className="row focus" style={{width:"100%"}}>
            <span className="sech1">WHAT WE DO</span>
            <span className="sech2">OUR MAIN FOCUS</span>
            <div className="col-md-1"></div>
            <Focuscard 
                icon={homeicon}
                heading="Buy a Home"
                text=" It is a established fact that a reader will be distracted readable content of a page"
            />
              <Focuscard 
                icon={homeicon}
                heading="Rent a Home"
                text="It is a established fact that a reader will be distracted readable content of a page"
            />
              <Focuscard 
                icon={homeicon}
                heading="Sell a Home"
                text="It is a established fact that a reader will be distracted readable content of a page"
            />
            <div className="col-md-1"></div> 
        </div>
        
    )
}
export default Focus;