import React from "react";
import Blogcard from "./blogCard";
import { blogData } from "../blogdata";
const Blog =()=>{
    let showndata= blogData.slice(0,3);
    return(
        <div className="row  blog" >
            <span className="sech1">BLOG</span>
            <span className="sech2">OUR BLOG</span>
            <div className="col-md-1"></div>
            {showndata.map((data,key)=>{
                return(

                    <div className="col-md-3  col-sm-3 blogcard" key={key}>
                        <Blogcard
                            key={key}
                            image={data.photo}
                            title={data.title}
                            date={data.date}
                            content={data.content}
                        />
                    </div>
                )
            })}
            <div className="col-md-1"></div>
        </div>
    )
}

export  default Blog;