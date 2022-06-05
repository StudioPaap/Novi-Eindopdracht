import React from "react";
import './Projectline.css';
import logo from "./ster-paars.svg"


function Projectline({title}){

    return(

            <div className="project-line">
                <div className="project-title">
                    <img className='star' src={logo}/>
                    <h3>{title}</h3>
                </div>

                <div className= "buttons-project">
                    <button> Download</button>
                    <button> Verwijder</button>
                </div>

            </div>

    )
}

export default Projectline