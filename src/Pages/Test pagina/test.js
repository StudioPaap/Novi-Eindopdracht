import React, {useContext} from "react";
import "./Test.css"
import { useForm } from 'react-hook-form';
import {useState} from "react";



function Test(){
    const [checked, setChecked] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    const handleChange = () => {
        setChecked(!checked);

    };

    const handleClick = (checked) =>{
        if (checked === true){
            setCounter(counter+2);
        }
    }

    return (
        <div>
            <label>

                <input
                    type="checkbox"
                    checked={checked}
                    value={4}
                    onChange={handleChange}
                    onClick={handleClick}
                />
                My Value
            </label>

            <p>Is "My Value" checked? {checked.toString()}</p>
            <p>{counter}</p>
        </div>
    );
};




export default Test