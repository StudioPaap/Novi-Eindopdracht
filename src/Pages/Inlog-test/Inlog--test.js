import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext--test";
import PinknavRight from "../../Components/Pinknav/pinknav-right";
import "./Inlog.css"

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {login} = useContext(AuthContext)

    async function handleLogin(data) {
        console.log(data)
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                    username: data.username,
                    password: data.wachtwoord,
                }
            )
            console.log(result)
            login(result.data.accessToken)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className="body--flex">
                <div className="inner-container-left inlog">
            <h1>Inloggen</h1>


            <form onSubmit={handleSubmit(handleLogin)}>
                <label htmlFor="form-email">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="form-username"
                        {...register("username")}
                        placeholder="gebruikersnaam"
                    />
                </label>
                <label htmlFor="form-wachtwoord">
                    Wachtwoord:
                    <input
                        type="password"
                        id="form-wachtwoord"
                        {...register("wachtwoord")}
                        placeholder="wachtwoord"
                    />
                </label>
                <button
                    type="submit"
                >Inloggen
                </button>
            </form>
            <p>Heb je nog geen account? <Link to="/registreer">Registreer</Link> je dan eerst.</p>
                </div>
                <div className= "pink--right">
                    <PinknavRight/>
                </div>
            </div>
        </>
    )
}

export default SignIn