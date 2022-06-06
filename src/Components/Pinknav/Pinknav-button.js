import React from "react";
import logo from "./Logo-w.png"
import "./pinknav.css"
import ButtonBasic from "../Buttons/button";
import {Link} from "react-router-dom";

function Pinknavbutton({title}) {
    return(
        <div className= 'pink-nav'>
            <h1> {title} </h1>
            <img className='foto-container' src= {logo}/>

            <Link to="/bestellijst">
            <ButtonBasic
            title="Nieuw project">
            </ButtonBasic>
                </Link>
        </div>


    )
}


export default Pinknavbutton