import React from "react";
import "./input-checkbox-signle.css"


function CheckboxInputSingle({title, hourAmount, name, register}) {
    return (

        <label className="container col2">
            {title}
            <input type="checkbox"
                   value={hourAmount}
                   name={name}
                   {...register(name)}/>
            <span className="checkmark"/>
        </label>


    );
}

export default CheckboxInputSingle;
