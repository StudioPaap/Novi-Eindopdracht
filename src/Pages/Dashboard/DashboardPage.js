import Pinknav from "../../Components/Pinknav/pinknav-right";
import Projectline from "../../Components/Project-line/Projectline";
import React, {useContext}from "react";
import "./Dashboard.css";
import Pinknavbutton from "../../Components/Pinknav/Pinknav-button";
import {AuthContext} from "../../context/AuthContext";
import FormPage from "../Form/formPage";



function DashboardPage() {
    const { username } = useContext(AuthContext);
    const formName = localStorage.getItem("FormProjectnaam")

    return (

<>
      <div className="body--flex">



    <div className='inner-container-left dashboard' >
        <h1> Dashboard </h1>

        <h2> Overzicht Projecten</h2>


    <section className="project-overzicht">

        <Projectline
            title={formName}
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
    </div>

          <div className= "pink--right">

              <Pinknavbutton

                  title= {username}
              />
          </div>

      </div>
</>
);
}

export default DashboardPage;