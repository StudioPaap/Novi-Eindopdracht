import Projectline from "../../Components/Project-line/Projectline";
import React, {useContext} from "react";
import "./Dashboard.css";
import Pinknavbutton from "../../Components/Pinknav/Pinknav-button";
import Uitlog from "../../Components/Uitlog/uitlog";
import {AuthContext} from "../../context/AuthContext--test";

function DashboardPage() {


    const {user:{ username }} = useContext(AuthContext);
    console.log(username);
    const formName = localStorage.getItem("FormProjectnaam")
    const formDate = localStorage.getItem("FormDate")


    return (

        <>
            <div className="body--flex">


                <div className='inner-container-left dashboard'>
                    <h1> Dashboard </h1>

                    <h2> Overzicht Projecten</h2>


                    <section className="project-overzicht">

                        <Projectline
                            title={formName}
                            datum={formDate}
                        />

                        <Projectline
                            title="Project Wouterse"
                            datum="02-10-2023"
                        />

                        <Projectline
                            title="Lely Open dag"
                            datum="04-07-2022"
                        />

                        <Projectline
                            title="Titel van het project van het project"
                        />

<Uitlog/>


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