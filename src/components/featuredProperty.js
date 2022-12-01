import React from "react";
import { propertyData } from "../propertydata";
import Featuredpropertycard from "./featuredpropertycard";


const FeaturedProperty = () => {

    let showndata = propertyData.slice(0, 2);
    return (
        <div>
            <div className=" row featuredproperty  p-4 col-12   m-auto" >
                <span className="sech1">PROPERTY</span>
                <span className="sech2">FEATURED PROPERTY</span>
                {showndata.map((data, key) => {
                    return (
                        <div className="col-11 col-lg-5 col-md-9  propertycard featuredpropertycard" key={key}>
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
                <div>
                    <button className="propertybtn col-4  col-lg-1 col-md-2 my-2">see all</button>
                </div>
            </div>
        </div>
    )
}
export default FeaturedProperty;