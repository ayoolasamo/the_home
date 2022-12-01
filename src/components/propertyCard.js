import React from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { BiShareAlt } from "react-icons/bi";

const Propertycard = ({ image, type, location, price, bed, bathroom, measurement, ownerpicture, owner }) => {
    return (
        <div  >
            <img className="propertyimg" src={image} alt="property" />
            <div className="propertydetails">
                <div className="row py-2">
                    <div className="col-9 col-lg-7 col-md-7 " style={{ color: "black", fontSize: "114%", fontWeight: "bold", textAlign: "left", }} >{type}</div>
                    <div className="col-3 " style={{ color: "#4373AF", fontSize: "110%", width: "20%!important", textAlign: "left" }} >${price}</div>
                </div>
                <div className="row py-2">
                    <div className="col-1  locationicon"><HiOutlineLocationMarker /></div>
                    <div className="col-8  col-lg-5 col-md-5">{location}</div>
                </div>

                <div style={{ marginRight: "7%" }} className="row py-2">
                    <div className="col-1  "><MdOutlineKingBed className="propertyicon" /></div>
                    <div className="propertyfacilities col-2 col-lg-1 col-md-1">{bed}</div>
                    <div className="col-1"> <TbBath className="propertyicon" /></div>
                    <div className="propertyfacilities col-2 col-lg-1  col-md-1">{bathroom}</div>
                    <div className="col-1 "><BsArrowsFullscreen className="propertyicon" /></div>
                    <div className="propertyfacilities col-2 col-lg-1  col-md-1">{measurement}sqft</div >
                </div>
                <hr></hr>
                <div className="row py-2">
                    <div className="col-2 "><span><img src={ownerpicture} alt="property" /></span></div>
                    <div className="col-6 "><span>{owner}</span></div>
                    <div className="col-2 "><FcLike className="propertyicon2 hearticon " /></div>
                    <div className="col-1 "><BiShareAlt className="propertyicon2" /></div>

                </div>
            </div>


        </div>
    )
}

export default Propertycard;