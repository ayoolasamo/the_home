import React from "react";
import Focus from "./focus";
import Property from "./property";
import FeaturedProperty from "./featuredProperty";
import Blog from "./Blog";
import Testimony from "./testimony";

const Body =()=>{
return(
    <div >
        <Focus/>
        <Property/>
        <FeaturedProperty/>
        <Blog/>
        <Testimony/>
    </div>
)
};

export default Body;