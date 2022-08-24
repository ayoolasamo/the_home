import React from "react"; 
import{MdOutlineKingBed} from "react-icons/md";
import {TbBath} from "react-icons/tb";
import {BsArrowsFullscreen} from "react-icons/bs";
import {HiOutlineLocationMarker } from "react-icons/hi";
import {FcLike} from "react-icons/fc";
import {BiShareAlt} from "react-icons/bi";


const Featuredpropertycard =({image,type,location,price,bed,bathroom,measurement,ownerpicture,owner})=>{
    return (
        <div className="row" style={{marginRight:""}}>
            
            <div className="featuredpropertydetails col-md-6 col-sm-6">
                <div className="row" >
                    <div className="col-md-9 col-sm-9" style={{marginBottom:"5%",color:"#4373AF",fontSize:"160%",width:"20%!important ", fontWeight:"bolder"}} >${price}</div>
                    <div className="col-md-12 col-sm-9" style={{marginBottom:"5%",color:"black", fontSize:"140%",width:"60%!important",fontWeight:"bolder"}} >{type}</div>
                </div>
                <div className="row" style={{marginBottom:"8%"}}>
                    <div className="col-md-1 col-sm-1 locationicon"><HiOutlineLocationMarker /></div>
                    <div className="col-md-9 col-sm-6 ">{location}</div>
                </div>  

                <div style={{marginRight:"7%", marginBottom:"14%"}} className="row">
                    <div className="col-md-2 col-sm-2"><MdOutlineKingBed className="propertyicon"/></div>
                    <div className="propertyfacilities col-md-1 col-sm-1">{bed}</div>
                    <div className="col-md-2 col-sm-1"> <TbBath className="propertyicon"/></div>
                    <div  className="propertyfacilities col-md-1 col-sm-1">{bathroom}</div>
                    <div className="col-md-2 col-sm-1"><BsArrowsFullscreen className="propertyicon"/></div>
                    <div  className="propertyfacilities col-md-1 col-sm-1">{measurement}sq</div >
                </div>
                <hr style={{marginBottom:"15%",marginTop:"15%"}}></hr>
                <div className="row">
                    <div className="col-md-5 col-sm-8"><span><img src={ownerpicture} alt="owner" /></span></div>
                    <div className="col-md-3 col-sm-4"><span>{owner}  </span></div>
                    <div className="col-md-2 col-sm-4"><FcLike className="propertyicon2 hearticon "/></div>
                    <div className="col-md-2 col-sm-4"><BiShareAlt className="propertyicon2"/></div>
                
                </div>
            </div>
            <img  className="featuredpropertyimg col-md-6 col-sm-6" src={image}  alt="property"/> 
           
        </div>
    )
}

export default Featuredpropertycard;