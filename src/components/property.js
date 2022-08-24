import React from "react";
import { propertyData } from "../propertydata";
import Propertycard from "./propertyCard";


const Property =()=>{
    
    let showndata= propertyData.slice(0,3);
    return(
        <div style={{marginBottom:"9%"}}>
            <div className=" row property " style={{width:"100%"}}>
                <span className="sech1">OUR PROPERTY </span>
                <span className="sech2">LATEST PROPERTY</span>
                <div className="col-md-1"></div>
                {showndata.map((data,key)=>{
                    return (
                        <div  className="col-md-3  col-sm-3 propertycard">
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
                <div className="col-md-1"></div>
            </div>
            <button className="propertybtn1" >see all</button>
        </div>
    )
}
export default Property;