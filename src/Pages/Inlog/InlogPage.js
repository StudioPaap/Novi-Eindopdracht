import React from "react";
import "./inlogpage.css"
import PinknavLeft from "../../Components/Pinknav/pinknav-left";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import FormFieldText from "../../Components/formfield text/form field text";
import ButtonBasic from "../../Components/Buttons/button";

function InlogPage(){
    const { register, handleSubmit } = useForm();
    function onFormSubmit(data) {
        console.log(data);
    }
    return(
        <>
        <PinknavLeft/>

            <header className='inner-container-right header-inlog'>
                <div>
                  <h1> Inloggen</h1>
                 </div>
            </header>
            <section className='inner-container-right registration'>
                <form onSubmit={handleSubmit(onFormSubmit)}>

                    <FormFieldText
                    type="email"
                    title="E-mail:"
                    name="e-mail"
                    id="e-mail"
                    {...register("email")}
                        />

                    <FormFieldText
                        type="password"
                        title="Wachtwoord"
                        name="password"
                        id="password"
                        {...register("password")}
                    />

                    <Link to="/">

                    <ButtonBasic
                        title="Inloggen"
                        type="submit"
                        />
                    </Link>

                </form>
                <p>Heb je nog geen account? <Link to="/registreer">Registreer</Link> je dan eerst.</p>
            </section>
        </>
    )

};

export default InlogPage