import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai"


const Blogcard = ({ image, title, content, date }) => {
    return (
        <div>
            <img className="propertyimg" src={image} alt="property" />
            <div className="blogcontent p-4">
                <p className="blogtitle">{title}</p>
                <p>{date}</p>
                <p>{content}</p>
                <div className="row">
                    <p className="col-md-4 col-lg-6 col-6 readmore">READ MORE</p>
                    <AiOutlineArrowRight className="col-md-2 col-lg-2 col-2 morearrow" />
                </div>
            </div>
        </div>
    )
}
export default Blogcard;