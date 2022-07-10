import React from "react";
import logo from "./Logo-w.png"
import "./Home.css"
import ButtonBasic from "../../Components/Buttons/button";




function Home() {
    return (
        <>
            <div className="body--flex--home">
                <div className="home--background">
                    <h1>Bestellijst</h1>
                    <h1>D&B Studio</h1>
                    <img src={logo} alt="Logo D&B"/>
                </div>



            <div className="home--button">
            <ButtonBasic
            title="Inloggen"
            type="button"
            link="/inlog"/>

                <ButtonBasic
                    title="Registreren"
                    type="button"
                    link="/registreer"/>
            </div>
            </div>
        </>
    )
}

export default Home;