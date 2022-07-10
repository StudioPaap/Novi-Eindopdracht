import React from "react";
import logo from "../../assets/Logo-w.png"
import "./pinknav.css"
import Uitlog from "../uitlog/uitlog";


function Pinknavbutton({title}) {
    return (
        <div className='pink-nav'>
            <h1> Welkom {title} </h1>
            <img className='foto-container' src={logo} alt="Logo D&B"/>


            <Uitlog/>


        </div>


    )
}

export default Pinknavbutton;



