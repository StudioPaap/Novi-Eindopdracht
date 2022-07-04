import React from "react";
import FormFieldText from "../text-input/form field text";
import "./Checkbox-input.css"
import {useState} from "@types/react";



function CheckboxInputRow ({title, hourAmount, name, register}){

    return (
        <>

<div c></div>
            <label className="container col1">
        {title}
            <input type="checkbox"
            value={hourAmount}
            name={name}

        {...register(name)}/>
            <span className="checkmark"/>
            </label>


        <div className="col2">
            <input
                type="text"
            id={title}
            name="Afmetingen"
            {...register(name)}/>
        </div>
        <div className="col3">
            <input
                type="text"
                id={title}
                name= "aantal"
                {...register(name)}/>
        </div>
        <p className="col4">{hourAmount}</p>
        </>
    )
}


export default CheckboxInputRow