import React from "react";
import './Projectline.css';
import star from "./ster-paars.svg"



function Projectline({title,  datum}){
    function removeData(){
        localStorage.clear();

    }

    return(

            <div className="project-line">
                <div className="project-title">
                    <img className='star' src={star} alt="sterlogo"/>
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