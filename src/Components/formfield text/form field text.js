import React from 'react';
import "./form fiel text.css"



function FormFieldText({title, type, id, name  }){
    return(

        <label htmlFor={id}>
            {title}
        <input
            type={type}
            id={id}
            name= {name}
        />
    </label>

    )
};

export default FormFieldText
