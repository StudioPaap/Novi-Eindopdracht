import React from "react";
import logo from "./Logo-w.png"
import "./pinknav.css"

function Pinknav({title}) {
    return (
        <div className='pink-nav'>
            <h1> {title} </h1>
            <img className='foto-container' src={logo}/>
        </div>

    )
}


export default Pinknav