import React from "react"; 
import{MdOutlineKingBed} from "react-icons/md";
import {TbBath} from "react-icons/tb";
import {BsArrowsFullscreen} from "react-icons/bs";
import {HiOutlineLocationMarker } from "react-icons/hi";
import {FcLike} from "react-icons/fc";
import {BiShareAlt} from "react-icons/bi";


const Propertycard =({image,type,location,price,bed,bathroom,measurement,ownerpicture,owner})=>{
    return (
        <div  >
            <img  className="propertyimg" src={image}  alt="property"/>
            <div className="propertydetails">
                <div className="row">
                    <div className="col-md-8 " style={{color:"black", fontSize:"130%", fontWeight:"bold",width:"60%!important"}} >{type}</div>
                    <div className="col-md-4 " style={{color:"#4373AF",fontSize:"110%",width:"20%!important"}} >${price}</div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1 locationicon"><HiOutlineLocationMarker /></div>
                    <div className="col-md-6 col-sm-6 ">{location}</div>
                </div>  

                <div style={{marginRight:"7%"}} className="row">
                    <div className="col-md-2 col-sm-3"><MdOutlineKingBed className="propertyicon"/></div>
                    <div className="propertyfacilities col-md-1 col-sm-2">{bed}</div>
                    <div className="col-md-2 col-sm-3"> <TbBath className="propertyicon"/></div>
                    <div  className="propertyfacilities col-md-1 col-sm-2">{bathroom}</div>
                    <div className="col-md-2 col-sm-3"><BsArrowsFullscreen className="propertyicon"/></div>
                    <div  className="propertyfacilities col-md-1 col-sm-6">{measurement}sqft</div >
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2 col-sm-6"><span><img src={ownerpicture}  alt="property"/></span></div>
                    <div className="col-md-6 col-sm-3"><span>{owner}</span></div>
                    <div className="col-md-2 col-sm-5"><FcLike className="propertyicon2 hearticon "/></div>
                    <div className="col-md-1 col-sm-5"><BiShareAlt className="propertyicon2"/></div>
                
                </div>
            </div>
             
           
        </div>
    )
}

export default Propertycard;