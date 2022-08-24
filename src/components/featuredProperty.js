import React from "react";
import { propertyData } from "../propertydata";
import Featuredpropertycard from "./featuredpropertycard";


const FeaturedProperty =()=>{
    
    let showndata= propertyData.slice(0,2);
    return(
        <div>
            <div className=" row featuredproperty" >
                <span className="sech1">PROPERTY</span>
                <span className="sech2">FEATURED PROPERTY</span>
                <div className="col-md-1"></div>
                    {showndata.map((data,key)=>{
                        return (
                            <div  className="col-md-4  propertycard featuredpropertycard" key={key}>
                                <Featuredpropertycard
                                    key={key} 
                                    owner={data.owner}
                                    image={data.photo}
                                    type={data.type}
                                    location={data.location}
                                    price={data.price}
                                    bed={data.beds}
                                    bathroom={data.bathroom}
                                    measurement={data.measurement}
                                    ownerpicture={data.ownerpicture}
                                />
                            </div>
                        )
                    })}
                <div className="col-md-1"></div>
                <div>

                <button className="propertybtn">see all</button>
                </div>
            </div>
        </div>
    )
}
export default FeaturedProperty;