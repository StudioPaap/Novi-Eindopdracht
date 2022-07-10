import React from "react";
import star from "../../assets/ster-paars.svg"
import "./Titlesection.css"

function Titlesection({title}) {
    return (
        <div className='title-section'>
            <img src={star} alt="star"/>
            <h3>{title}</h3>
        </div>
    )
}

export default Titlesection;