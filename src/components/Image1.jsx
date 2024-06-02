import React from "react";
import Images1 from '../images/image1.jpeg'

const Image1 = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={Images1} className="image"></img>
        </div>
    )
}

export default Image1