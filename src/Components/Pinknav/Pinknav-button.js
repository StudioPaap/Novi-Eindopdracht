import React , {useContext} from "react";
import logo from "../../assets/Logo-w.png"
import "./pinknav.css"
import ButtonBasic from "../Buttons/button";
import {AuthContext} from "../../context/AuthContext--test";
import Uitlog from "../Uitlog/uitlog";


function Pinknavbutton({title}) {
    const { logout } = useContext(AuthContext);
    return (
        <div className='pink-nav'>
            <h1> Welkom {title} </h1>
            <img className='foto-container' src={logo} alt="Logo D&B"/>



            <Uitlog/>



        </div>


    )
}

export default Pinknavbutton;



