import React from "react";
import "./Form.css"
import FormFieldText from "../../Components/formfield text/form field text";
import ButtonBasic from "../../Components/Buttons/button";
import PinkNavLog from "../../Components/Pinknav/PinkNavLog";

function FormPage(){

    return(

        <>
            <PinkNavLog/>
          <header className="inner-container-right Bestellijst">

              <h1 > Bestellijst</h1>

          </header>
          <main className="inner-container-right">
              <section>
                  <h3>Algemeen</h3>
                  <FormFieldText
                      title="Naam bedrijf klant"
                      type="text"
                      />

                  <FormFieldText
                      title="D&B Toppers die betrokken zijn:"
                      type="text"
                  />

                  <FormFieldText
                      title="Soort event"
                      type="text"
                  />


                  <ButtonBasic
                      type="link"
                      title="Volgende"/>



              </section>

              <section>
                  <h3>Voortraject</h3>
              </section>

              <section>
                  <h3>Grafisch drukwerk</h3>
              </section>
              <section>
                  <h3>Video</h3>
              </section>
          </main>
          <footer>

          </footer>


        </>


    )
};

export default FormPage