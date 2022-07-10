import React from "react";
import logo from "../../assets/Logo-w.png"
import "./pinknav.css"
import Titlesection from "../titlesection/Titlesection";
import ButtonBasic from "../buttons/button";
import Scrollindicator from "../scrollindicator/scrollindicator";
import {useHistory} from "react-router-dom";

function PinknavLog() {

    const history = useHistory();

    function stop() {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("weet je zeker dat je wilt stoppen?") === true) {
            history.push("/dashboard")
        }
    }

    return (
        <div className='pink-nav-left'>

            <img className='foto-container' src={logo} alt="LogoD&B"/>

            <section className="section-log">
                <div className="pink-title">
                    <Titlesection
                        title="Algemeen"/>

                    <Titlesection
                        title="Deadlines"/>


                    <Titlesection
                        title="Voortraject"/>


                    <Titlesection
                        title="Grafisch digitaal"/>


                    <Titlesection
                        title="Grafisch drukwerk"/>

                </div>
                <div className="progressbar-container">
                    <Scrollindicator/>
                </div>
            </section>


            <div className="button-log">

                <ButtonBasic
                    title="Stoppen"
                    action={stop}/>
            </div>
        </div>
    )
}


export default PinknavLog;