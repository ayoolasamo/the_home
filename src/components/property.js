import React from "react";
import { propertyData } from "../propertydata";
import Propertycard from "./propertyCard";

const Property = () => {
    let showndata = propertyData.slice(0, 3);
    return (
        <div style={{ marginBottom: "9%" }}>
            <div className="row property p-4 col-11 col-md-9  col-lg-11 m-auto" >
                <span className="sech1">OUR PROPERTY </span>
                <span className="sech2">LATEST PROPERTY</span>

                {showndata.map((data, key) => {
                    return (
                        <div className=" col-12  my-4 col-lg-3   propertycard">
                            <Propertycard
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
                <button className="propertybtn1 col-lg-1 col-md-2 col-4 my-2 m-auto" >see all</button>
            </div>
        </div>
    )
}
export default Property;