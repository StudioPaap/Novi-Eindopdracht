import React from "react";
import "./Form.css"
import FormFieldText from "../../Components/Form-input/text-input/form field text";
import ButtonBasic from "../../Components/Buttons/button";
import PinkNavLog from "../../Components/Pinknav/PinkNavLog";
import Titlesection from "../../Components/Titlesection/Titlesection";
import Datenow from "../../Components/Form-input/Date input/Date";
import ButtonRadio from "../../Components/Buttons/button radio/button-radio";
import CheckboxSingle from "../../Components/Form-input/Checkbox-input-single/Checkbox-single";
import {useForm} from 'react-hook-form'
import {Link} from "react-router-dom";


function FormPage() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (

        <>

            <PinkNavLog/>

            <div className="form-body">

                <main className="inner-container-right">


                    <div className="counter">

                        <p>Aantal uur totaal:</p>
                        <div className="counter-area">
                            <p> ... uur</p>

                        </div>

                    </div>
                    <h1> Bestellijst</h1>

                    <form onBlur={handleSubmit(onFormSubmit)}>
                        <section>
                            <Titlesection
                                title="Algemeen"/>

                            <div className="twoInputField">
                                <FormFieldText
                                    type="text"
                                    title="Projectnaam"
                                    name="A-Projectnaam"
                                    id="Projectnaam"
                                    register={register}
                                />

                                <FormFieldText
                                    type="text"
                                    title="Eventmanager:"
                                    name="A-Eventmanager:"
                                    id="Eventmanager:"
                                    register={register}
                                />
                            </div>
                            <div className="twoInputField">

                                <FormFieldText
                                    type="date"
                                    title="Datum:"
                                    name="A-Date"
                                    id="Date"
                                    register={register}/>


                                <FormFieldText
                                    type="text"
                                    title="Creative:"
                                    name="A-Creative:"
                                    id="Creative:"
                                    register={register}/>


                            </div>

                            <label htmlFor="SortEvent"> Soort Evenement </label>
                            <div className="buttonrow">
                                <ButtonRadio
                                    title="Jubileum"/>
                                <ButtonRadio
                                    title="One off"/>
                                <ButtonRadio
                                    title="tweetje"/>
                                <ButtonRadio
                                    title="Digital"/>
                            </div>

                        </section>
                        <section>
                            <Titlesection
                                title="Deadlines"/>
                            <Datenow/>

                        </section>
                        <section>
                            <Titlesection title="Branding bedrijf"/>
                            <div className="twoInputField--checkbox-textfield">
                                <div>
                                    <CheckboxSingle
                                        title="huisstijl aanwezig?"
                                        name="B-Aantal uur"
                                        id="huisstijl"
                                        hourAmount="0"
                                        register={register}/>

                                    <CheckboxSingle
                                        title="huisstijl nog ontwerpen?"
                                        name="B-Aantal uur"
                                        id="huisstijl"
                                        hourAmount="8"
                                        register={register}/>

                                </div>
                                <input
                                    type="link"
                                    placeholder="LINK naar Sharepoint"/>
                            </div>

                        </section>
                        <section>
                            <Titlesection
                                title="Voortraject"/>

                            <div className="twoInputField--checkbox">

                                <div>
                                    <CheckboxSingle
                                        title="Moodboard?"
                                        name="C-Moodboard"
                                        id="huisstijl"
                                        register={register}/>

                                    <CheckboxSingle
                                        title="Eventlogo"
                                        name="C-Eventlogo"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Keyvisual"
                                        name="C-Keyvisual"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Social Plan"
                                        name="C-Social plan"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Event Huisstijl"
                                        name="C-Event huisstijl"
                                        id="huisstijl"
                                        register={register}/>
                                </div>
                                <div>
                                    <CheckboxSingle
                                        title="Mock-up merch"
                                        name="C-Mock-up merch"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Beeldbewerking"
                                        name="C-Beeldbewerking"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Presentatie 15 slides"
                                        name="C-Presentatie 15 slides"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Presentatie 30 slides"
                                        name="C-Presentatie 30 slides"
                                        id="huisstijl"
                                        register={register}/>
                                    <CheckboxSingle
                                        title="Presentatie 60 slides"
                                        name="C-Presentatie 60 slides"
                                        id="huisstijl"
                                        register={register}/>
                                </div>

                            </div>


                        </section>

                        <section>

                            <Link to="/thanks">
                                <ButtonBasic
                                    title="Klaar!"
                                    type="submit"
                                />
                            </Link>

                        </section>
                    </form>
                </main>
            </div>


        </>


    )
};

export default FormPage