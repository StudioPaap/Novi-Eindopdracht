import React , {useContext} from "react";
import logo from "../../assets/Logo-w.png"
import "./pinknav.css"
import ButtonBasic from "../Buttons/button";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext--test";


function Pinknavbutton({title}) {
    const { logout } = useContext(AuthContext);
    return (
        <div className='pink-nav'>
            <h1> {title} </h1>
            <img className='foto-container' src={logo} alt="Logo D&B"/>

            <Link to="/bestellijst">
                <ButtonBasic
                    title="Nieuw project">
                </ButtonBasic>

            </Link>

        </div>


    )
}

export default Pinknavbutton;



