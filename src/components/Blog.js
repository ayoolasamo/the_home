import React from "react";
import Blogcard from "./blogCard";
import { blogData } from "../blogdata";
const Blog = () => {
    let showndata = blogData.slice(0, 3);
    return (
        <div className="row  blog p-4 col-lg-11 m-auto" >
            <span className="sech1">BLOG</span>
            <span className="sech2">OUR BLOG</span>

            {showndata.map((data, key) => {
                return (
                    <div className="col-md-9 my-3  col-lg-3 col-11 blogcard" key={key}>
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
        </div>
    )
}

export default Blog;