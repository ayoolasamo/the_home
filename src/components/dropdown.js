import React from "react";
const Dropdown = ({ value, onchange, data, placeholder }) => {
    return (
        <select value={value} onChange={onchange} className="searchvalue">

            <option default value="" >{placeholder}</option>
            {data.map((property) => (
                <option value={property.value}>{property.value}</option>
            ))}

        </select>
    )
}
export default Dropdown;