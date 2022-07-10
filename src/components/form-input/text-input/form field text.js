import React from 'react';
import "./form fiel text.css";


function FormFieldText({title, type, id, name, register}) {


    return (

        <label htmlFor={id}>
            {title}
            <input
                type={type}
                id={id}
                name={name}
                {...register(name)}
            />
        </label>

    )
}


export default FormFieldText
