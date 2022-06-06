import React from "react";
import Pinknav from "../../Components/Pinknav/pinknav-right";
import "./register.css"
import { useForm } from 'react-hook-form';


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
                        <label htmlFor="name-field">
                            Voornaam:
                            <input
                                type="text"
                                id="name-field"
                                name="voornaam"
                            />
                        </label>

                        <label htmlFor="surname-field">
                            Achternaam:
                            <input
                                type="text"
                                id="surname-field"
                                name="Achternaam"
                            />
                        </label>
                        </div>
                        <label htmlFor="email-field">
                            Email-adres:
                            <input
                                type="text"
                                id="email-field"
                                name="email"
                            />
                        </label>

                        <label htmlFor="password-field">
                          Wachtwoord:
                            <input
                                type="password"
                                id="password-field"
                                name="Password"
                            />
                        </label>

                        <label htmlFor="password-field">
                            Wachtwoord herhalen:
                            <input
                                type="password"
                                id="password-field"
                                name="Password"
                            />
                        </label>

                        <label htmlFor="password-field">
                          Functie binnen D&B:
                        </label>

                        <div className="checkbox-row inner-container-left">

                         <div className="check-box">
                        <label htmlFor="Studio">
                            Studio
                            <input
                                type="checkbox"
                                value="Studio"
                                id="Studio"
                                name="Password"
                            />
                        </label>
                         </div>

                            <label htmlFor="Eventmanagero">
                            Eventmanager
                            <input
                                type="checkbox"
                                value="Eventmanager"
                                id="password-field"
                                name="Password"
                            />
                        </label>

                        <label htmlFor="Eventmanagero">
                           Creative
                            <input
                                type="checkbox"
                                value="Creative"
                                id="password-field"
                                name="Creative"
                            />
                        </label>
                        <label htmlFor="Sales">
                            Sales
                            <input
                                type="checkbox"
                                value="Sales"
                                id="password-field"
                                name="Sales"
                            />
                        </label>
                        </div>

                    </form>
                </section>
            </>
        )

};

export default RegisterPage;