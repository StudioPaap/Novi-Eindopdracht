import React from "react";
import Pinknav from "../../Components/Pinknav/pinknav-right";
import "./register.css"
import { useForm } from 'react-hook-form';
import FormFieldText from "../../Components/formfield text/form field text";
import ButtonRadio from "../../Components/Buttons/button radio/button-radio";
import ButtonBasic from "../../Components/Buttons/button";
import {Link} from "react-router-dom";


function RegisterPage() {

        return (
            <>
                <header>
                    <Pinknav/>
                </header>
                <div className="inner-container-left register">
                    <h1> Registreren</h1>
                </div>

                <section className='inner-container-left registration'>
                    <form>

                        <div className="twoInputField">
                            <FormFieldText
                                type="text"
                                title="Voornaam:"
                                id="name"
                                name="name"
                            />

                            <FormFieldText
                                type="text"
                                title="Achternaam:"
                                id="surname"
                                name="surname"
                            />
                        </div>

                        <FormFieldText
                        type="email"
                        title="E-mail:"
                        id="email"
                        name="email"
                        />

                        <FormFieldText
                            type="password"
                            title="Wachtwoord:"
                            id="password"
                            name="password"
                        />


                        <FormFieldText
                            type="password"
                            title="Herhaal Wachtwoord:"
                            id="password2"
                            name="password2"
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
         <Link to = "/inlog">
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