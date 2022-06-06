import Pinknav from "../../Components/Pinknav/pinknav-right";
import Projectline from "../../Components/Project-line/Projectline";
import React from "react";
import "./Dashboard.css";
import Pinknavbutton from "../../Components/Pinknav/Pinknav-button";



function DashboardPage() {
    return (
<>
        <header>

            <Pinknavbutton

                title='Welkom User'
            />

        </header>

    <div className='inner-container-left dashboard' >
        <h1> Dashboard </h1>
        <h2> Overzicht Projecten</h2>
    </div>

    <section className="inner-container-left project-overzicht">

        <Projectline
            title="Titel van het project van het project"
        />

        <Projectline
            title="Titel van het project van het project  2"
        />

        <Projectline
            title="Titel van het project van het project  3"
        />

        <Projectline
            title="Titel van het project van het project"
        />

        <Projectline
            title="Titel van het project van het project  2"
        />

        <Projectline
            title="Titel van het project van het project  3"
        />

        <Projectline
            title="Titel van het project van het project"
        />

        <Projectline
            title="Titel van het project van het project  2"
        />

        <Projectline
            title="Titel van het project van het project  3"
        />

        <Projectline
            title="Titel van het project van het project"
        />

        <Projectline
            title="Titel van het project van het project  2"
        />

        <Projectline
            title="Titel van het project van het project  3"
        />

    </section>
</>
);
}

export default DashboardPage;