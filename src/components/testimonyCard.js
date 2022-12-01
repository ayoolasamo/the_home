import React from "react";
import { AiFillStar } from "react-icons/ai"


const TestimonyCard = ({ image, name, username, remark, rating }) => {
    const rows = [];
    for (let i = rating; i > 0; i--) {
        rows.push(<AiFillStar className="star" />);
    }
    return (
        <div>
            <img src={image} alt="property " />
            <p className="customername">{name}</p>
            <p>{username}</p>
            <p>{rows}</p>
            <p>{remark}</p>

        </div>
    )
}

export default TestimonyCard;