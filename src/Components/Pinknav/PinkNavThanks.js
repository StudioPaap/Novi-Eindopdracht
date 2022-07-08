import logo from "../../assets/Logo-w.png";
import {Link} from "react-router-dom";
import ButtonBasic from "../Buttons/button";
import React from "@types/react";

 export default function PinkNavThanks({title}) {
    return(
        <div className= 'pink-nav'>
            <h1> {title} </h1>
            <img className='foto-container' src= {logo}/>

            <Link to="/dashboard">
                <ButtonBasic
                    title="Naar dashboard">
                </ButtonBasic>
            </Link>
        </div>


    )
}
