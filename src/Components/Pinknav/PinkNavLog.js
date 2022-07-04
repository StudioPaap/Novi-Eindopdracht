import React from "react";
import logo from "./Logo-w.png"
import "./pinknav.css"
import Titlesection from "../Titlesection/Titlesection";
import ButtonBasic from "../Buttons/button";
import loadbar from"./loadbar300px.png";
import Scrollindicator from "../scrollindicator/scrollindicator";

function PinknavLog() {
    return (
        <div className='pink-nav-left'>

            <img className='foto-container' src={logo}/>

<section className="section-log">
            <div className="pink-title">
                <Titlesection
                    title="Algemeen"/>


                <Titlesection
                    title="Voortraject"/>


                <Titlesection
                    title="Grafisch digitaal"/>


                <Titlesection
                    title="Grafisch drukwerk"/>


                <Titlesection
                    title="Details"/>
            </div>
    <div className="progressbar-container">
        <Scrollindicator/>
    </div>
</section>


            <div className="button-log">

                <ButtonBasic
                    title="Stoppen"/>
            </div>
        </div>
    )
}


export default PinknavLog;