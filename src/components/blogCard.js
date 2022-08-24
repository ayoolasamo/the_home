import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"


const Blogcard=({image, title,content, date})=>{
return(
    <div>
        <img  className="propertyimg" src={image}  alt="property"/>
        <div className="blogcontent">
            <p className="blogtitle">{title}</p>
            <p>{date}</p>
            <p>{content}</p>
            <div className="row">
            <p className="col-md-6 col-sm-6 readmore">READ MORE</p>
            <div className="col-md-3"></div>
            <AiOutlineArrowRight className="col-md-2 col-sm-2 morearrow" />
            </div>
        </div>
    </div>
)
} 
export default Blogcard;