import React from "react";
import "./inlogpage.css"
import PinknavLeft from "../../Components/Pinknav/pinknav-left";
import { useForm } from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";
import FormFieldText from "../../Components/Form-input/text-input/form field text";
import ButtonBasic from "../../Components/Buttons/button";

function InlogPage(){
    const {register, handleSubmit, formState:{errors}} = useForm()
    const history = useHistory();

    function onFormSubmit(data){
        console.log(data)
        history.push("/")


    }



    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit)}>

        <label htmlFor="Email">
            Email:
            <input
            type="email"
            id="Email"
                {...register("Email",{
                    required:{
                        value:true,
                        message: "Dit veld is verplicht"
                    },

            })}/>
            {errors.Email && <p>{errors.Email.message}</p> }
        </label>

            <label htmlFor="password">
               Wachtwoord:
                <input
                    type="password"
                    id="password"
                    {...register("password",
                        {
                            minLength:
                                {
                                    value: 8,
                                    message:"Je wachtwoord is min. 8 tekens lang",
                                },
                        })}/>
                {errors.password && <div className="Message--error"><p>{errors.password.message}</p></div> }
            </label>


            <button
                type="submit"
            >
                versturen
            </button>


        </form>

    <p>Heb je nog geen account? <Link to="/registreer">Registreer</Link> je dan eerst.</p>
    </>



    )
}





export default InlogPage