import React, {useState} from "react";
import './Projectline.css';
import logo from "./ster-paars.svg"



function Projectline({title,  datum}){
    function removeData(){
        localStorage.clear();

    }

    return(

            <div className="project-line">
                <div className="project-title">
                    <img className='star' src={logo}/>
                    <h2>{title}</h2>

                    <h3> {datum}</h3>
                </div>

                <div className= "buttons-project">
                    <button
                    onClick={removeData}> Remove</button>
                </div>

            </div>

    )
}

export default Projectline