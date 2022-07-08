import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import PinknavLeft from "../../Components/Pinknav/pinknav-left";
import "./register.css"

function SignUp() {
    const {register, handleSubmit} = useForm();
    const history = useHistory()

    async function registrationSubmit(data) {
        console.log(data)
        console.log(data.role)
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: [data.role],
                }
            )
            history.push('/inlog')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className="body--flex">
                <div className="pink--left">
                    <PinknavLeft/>
                </div>
                <div className="inner-container-right register">
                    <h1>Registratie</h1>
                    <form onSubmit={handleSubmit(registrationSubmit)}>
                        <label htmlFor="form-email">
                            Email:
                            <input
                                type="text"
                                id="form-email"
                                {...register("email")}
                            />
                        </label>
                        <label htmlFor="form-wachtwoord">
                            Wachtwoord:
                            <input
                                type="text"

                                id="form-wachtwoord"
                                {...register("password")}
                            />
                        </label>
                        <label htmlFor="form-gebruikersnaam">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="form-gebruikersnaam"
                                {...register("username")}
                            />
                        </label>
                        <label htmlFor="role">Functie binnen D&B:</label>


                            <div className="radiobutton--register ">

                                <label className="box" htmlFor="role1">
                                    <input
                                        type="radio"
                                        id="role1"
                                        value="admin-user"
                                        {...register("role")}
                                    />
                                    <span>Studio</span>
                                </label>

                                <label className="box" htmlFor="role2">
                                    <input
                                        type="radio"
                                        id="role2"
                                        value="user"
                                        {...register("role")}

                                    />
                                    <span>Creatie</span>
                                </label>

                                <label className="box" htmlFor="role3">
                                    <input
                                        type="radio"
                                        id="role3"
                                        value="user"
                                        {...register("role")}
                                    />
                                    <span>Sales</span>
                                </label>
                                <label className="box" htmlFor="role4">
                                    <input
                                        type="radio"
                                        id="role4"
                                        value="user"
                                        {...register("role")}
                                    />
                                    <span>Eventmanager</span>
                                </label>
                            </div>

                        <button
                            type="submit"
                        >Registreren
                        </button>
                    </form>
                    <p>Heb je al een account? Log je <Link to="/inlog">hier</Link> dan in!</p>
                </div>
            </div>
        </>
    )
}

export default SignUp