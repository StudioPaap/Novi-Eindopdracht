import Projectline from "../../components/project-line/Projectline";
import React, {useContext} from "react";
import "./Dashboard.css";
import Pinknavbutton from "../../components/pinknav/Pinknav-button";
import {AuthContext} from "../../context/AuthContext";
import ButtonBasic from "../../components/buttons/button";

function DashboardPage() {


    const {user: {username}} = useContext(AuthContext);
    console.log(username);
    const formName = localStorage.getItem("FormProjectnaam")
    const formDate = localStorage.getItem("Date")
    const formUren = localStorage.getItem("Aantal uren")

    function removeDataOld() {
        // eslint-disable-next-line no-restricted-globals
        confirm("Weet je zeker dat je dit bestand wilt verwijderen")

    }

    function removeData() {
        // eslint-disable-next-line no-restricted-globals
        confirm("Weet je zeker dat je dit bestand wilt verwijderen")
        localStorage.removeItem('FormProjectnaam');
        localStorage.removeItem('Date');
        localStorage.removeItem('Aantal uren');

    }

    return (

        <>
            <div className="body--flex">


                <div className='inner-container-left dashboard'>
                    <h1> Dashboard </h1>


                    <section className="project-overzicht">


                        {formName &&
                            <Projectline
                                title={formName}
                                datum={formDate}
                                hour={formUren}
                                action={removeData}
                            />
                        }

                        <h2>Oude projecten</h2>
                        <Projectline
                            title="Project Wouterse"
                            datum="02-10-2023"
                            hour="23"
                            action={removeDataOld}
                        />

                        <Projectline
                            title="Lely Open dag"
                            datum="04-07-2022"
                            hour="16"
                            action={removeDataOld}
                        />

                        <ButtonBasic
                            title="Nieuw project"
                            link="bestellijst">
                        </ButtonBasic>


                    </section>
                </div>

                <div className="pink--right">

                    <Pinknavbutton

                        title={username}
                    />
                </div>

            </div>
        </>
    );
}

export default DashboardPage;