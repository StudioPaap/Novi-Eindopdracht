import React from "react";
import "./button.css";
import {Link} from "react-router-dom";

function ButtonBasic({title, link, type}){
    return(

        <Link to={link}>
        <button
        id={title}
        name={title}
        type={type}
        >
            {title}
        </button>
        </Link>
    )
}

export default ButtonBasic;