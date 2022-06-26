import React from "react";
import Pinknav from "../../Components/Pinknav/pinknav-right";
import "./register.css"
import {useForm} from 'react-hook-form';
import FormFieldText from "../../Components/Form-input/text-input/form field text";
import ButtonRadio from "../../Components/Buttons/button radio/button-radio";
import ButtonBasic from "../../Components/Buttons/button";
import {Link} from "react-router-dom";


function RegisterPage() {
    const { register, handleSubmit } = useForm();
    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <header>
                <Pinknav/>
            </header>
            <div className="inner-container-left">
                <h1> Registreren</h1>
            </div>

            <section className='inner-container-left registration'>
                <form onBlur={handleSubmit(onFormSubmit)}>

                    <div className="twoInputField">
                        <FormFieldText
                            type="text"
                            title="Voornaam:"
                            id="name"
                            name="name"
                            register={register}
                        />

                        <FormFieldText
                            type="text"
                            title="Achternaam:"
                            id="surname"
                            name="surname"
                            register={register}
                        />
                    </div>

                    <FormFieldText
                        type="email"
                        title="E-mail:"
                        id="email"
                        name="email"
                        register={register}
                    />

                    <FormFieldText
                        type="password"
                        title="Wachtwoord:"
                        id="password"
                        name="password"
                        register={register}
                    />


                    <FormFieldText
                        type="password"
                        title="Herhaal Wachtwoord:"
                        id="password2"
                        name="password2"
                        register={register}
                    />
                    <div className="Titelbuttonrow">
                        <label> Welke functie binnen D&B heb je?</label>
                        <div className="buttonrow">


                            <ButtonRadio
                                title="Creative"/>

                            <ButtonRadio
                                title="Studio"/>

                            <ButtonRadio
                                title="Sales"/>

                            <ButtonRadio
                                title="Eventmanager"/>


                        </div>
                    </div>

                    <div className="button-register">
                        <Link to="/inlog">
                            <ButtonBasic
                                title="Registreer mij"
                                type="submit"
                                id="Register"
                            />
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )

};

export default RegisterPage;