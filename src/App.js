import './App.css';
import React from "react";
import Projectline from './Components/Project-line/Projectline';
import Pinknav from "./Components/Pinknav/pinknav-right";







function App() {
  return (
      <>
          <header>

              <Pinknav

                  title='Welkom User'
                  />

          </header>

          <div className= 'inner-container-left'>
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

export default App;
