import React from "react";
import "./inlogpage.css"
import PinknavLeft from "../../Components/Pinknav/pinknav-left";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

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
                    <label htmlFor="email-field">
                        E-mailadres:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            {...register("email")}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Wachtwoord:
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            {...register("password")}
                        />
                    </label>
                    <button
                        type="submit"
                        className="form-button"
                    >
                        Inloggen
                    </button>
                </form>
                <p>Heb je nog geen account? <Link to="/registreer">Registreer</Link> je dan eerst.</p>
            </section>
        </>
    )

};

export default InlogPage