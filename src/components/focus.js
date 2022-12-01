import React from "react";
import homeicon from "../images/homeicon.PNG"
import Focuscard from "./focusCard";
const Focus = () => {
    return (
        <div className="row  focus p-4 col-10  col-lg-11 m-auto " >
            <span className="sech1">WHAT WE DO</span>
            <span className="sech2">OUR MAIN FOCUS</span>

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

        </div>

    )
}
export default Focus;