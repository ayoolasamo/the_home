import React from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { BiShareAlt } from "react-icons/bi";


const Featuredpropertycard = ({ image, type, location, price, bed, bathroom, measurement, ownerpicture, owner }) => {
    return (
        <div className="row" style={{ marginRight: "" }}>
            <div className="featuredpropertydetails col-md-6 col-lg-6 col-12 p-2">
                <div className="row" >
                    <div className="col-9 col-lg-7 col-md-7 " style={{ marginBottom: "2%", color: "#4373AF", fontSize: "160%", width: "20%!important ", fontWeight: "bolder" }} >${price}</div>
                    <div className="col-md-12 col-lg-12" style={{ marginBottom: "2%", color: "black", fontSize: "120%", width: "60%!important", fontWeight: "bolder" }} >{type}</div>
                </div>
                <div className="row py-1" style={{ marginBottom: "8%" }}>
                    <div className="col-md-1 col-lg-1 col-1 locationicon py-1"><HiOutlineLocationMarker /></div>
                    <div className="col-md-9 col-lg-8 col-8">{location}</div>
                </div>

                <div style={{ marginRight: "7%", marginBottom: "14%" }} className="row py-1">
                    <div className="col-md-2 col-lg-2 col-1"><MdOutlineKingBed className="propertyicon" /></div>
                    <div className="propertyfacilities col-md-1 col-lg-1 col-1">{bed}</div>
                    <div className="col-md-2 col-lg-1 col-1"> <TbBath className="propertyicon" /></div>
                    <div className="propertyfacilities col-md-1 col-lg-1 col-1">{bathroom}</div>
                    <div className="col-md-2 col-lg-1 col-1"><BsArrowsFullscreen className="propertyicon" /></div>
                    <div className="propertyfacilities col-md-1 col-lg-1 col-1">{measurement}sq</div >
                </div>
                <hr style={{ marginBottom: "10%", marginTop: "15%" }}></hr>
                <div className="row">
                    <div className="col-md-5 col-lg-8 col-3"><span><img src={ownerpicture} alt="owner" /></span></div>
                    <div className="col-md-3 col-lg-4 col-5"><span>{owner}  </span></div>
                    <div className="col-md-2 col-lg-4 col-2"><FcLike className="propertyicon2 hearticon " /></div>
                    <div className="col-md-2 col-lg-4 col-2"><BiShareAlt className="propertyicon2" /></div>

                </div>
            </div>
            <img className="featuredpropertyimg col-md-6 col-lg-6 col-12" src={image} alt="property" />

        </div>
    )
}

export default Featuredpropertycard;