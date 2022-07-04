import React from "react";
import "./button-radio.css";



function ButtonRadio({title}){
    return(
        <>
        <label className="box" htmlFor={title }>
<input type="radio" name={title} id={title}/>

    <span>{title}</span>

</label>

</>
)
}
export default ButtonRadio;