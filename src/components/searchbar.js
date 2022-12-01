import React from "react";
import Dropdown from "./dropdown";
import { TbMinusVertical } from "react-icons/tb"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { RiPriceTag3Line } from "react-icons/ri"

const Searchbar = () => {
    const [location, setLocation] = React.useState("hello");
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const [propertyType, setPropertyType] = React.useState("duplex");
    const handlePropertyChange = (event) => {
        setPropertyType(event.target.value);
    };
    const [price, setPrice] = React.useState("10000");
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    };

    return (
        <div className="row searchdiv" >

            <div className="searchbar col-md-8 row  m-auto"  >
                <div className="col-lg-3 col-4" style={{ padding: "0%" }}>

                    <HiOutlineLocationMarker />
                    <Dropdown
                        value={location}
                        placeholder="location"
                        onchange={handleLocationChange}
                        data={[
                            { value: "Mipur City,Dhaka" },
                            { value: "lagos" },
                            { value: "Mipur City,Dhaka" },
                        ]}
                    ></Dropdown>
                </div>
                <div className="col-lg-3 col-4" style={{ padding: "0%" }}>
                    <TbMinusVertical style={{ fontSize: "30px", color: "A5A5A6" }} />
                    <AiOutlineHome />
                    <Dropdown className="propertyvalue"
                        value={propertyType}
                        placeholder="Property Type"
                        onchange={handlePropertyChange}
                        data={[
                            { value: "Duplex Apartment" },
                            { value: "Bunglow Apartment" },
                            { value: "Semi Detached Apartment" },
                        ]}
                    />
                </div>
                <div className="col-4 col-lg-3" style={{ padding: "0%" }}>
                    <TbMinusVertical style={{ fontSize: "30px", color: "A5A5A6" }} />
                    <RiPriceTag3Line />
                    <Dropdown
                        value={price}
                        onchange={handlePriceChange}
                        placeholder=" Max Price"
                        data={[
                            { value: "1000000" },
                            { value: "4000000" },
                            { value: "5000000" },
                        ]}
                    />
                </div>
                <div className="col-md-2 col-3 col-lg-2 m-auto" >
                    <button className="searchbtn ">Search</button>
                </div>
            </div>

        </div>
    )

}
export default Searchbar;