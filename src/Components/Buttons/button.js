import React from "react";
import "./button.css";

function ButtonBasic({title, link, type}){
    return(

        <button
        to={link}
        id={title}
        name={title}
        type={type}

        >
            {title}
        </button>
    )
}

export default ButtonBasic;