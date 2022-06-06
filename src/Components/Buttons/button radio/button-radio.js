import React from "react";
import "./button-radio.css"

function ButtonRadio({title}){

    return(
        <>
        <label htmlFor={title }>
<input type="radio" name="radio" id={title}/>
<div class="box">
    <span>{title}</span>
</div>
</label>

</>
)
}
export default ButtonRadio;