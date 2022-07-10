import React, {useState} from "react";
import "./Form.css"
import FormFieldText from "../../components/form-input/text-input/form field text";
import ButtonBasic from "../../components/buttons/button";
import PinkNavLog from "../../components/pinknav/PinkNavLog";
import Titlesection from "../../components/titlesection/Titlesection";
import CheckboxSingle from "../../components/form-input/checkbox-input-single/Checkbox-single";
import {useForm} from 'react-hook-form'
import Weather from "../../components/weather/Weather";
import Workdays from "../../components/workdays/Workdays";


function Form() {

    const {register, handleSubmit} = useForm();
    const [hour, setHour] = useState(0);
    const [nameProject, setNameProject] = useState("");
    const [datum, setDatum] = useState("");


    function onFormSubmit(data) {
        console.log(data)
        setNameProject(data.Projectnaam);
        setDatum(data.Date)
        const uren = data.uren;

        const hourNumberArray = uren.map((uur) => {
            return Number(uur);
        });
        const SumHour = hourNumberArray.reduce((a, b) => a + b, 0)
        setHour(SumHour);


        localStorage.setItem("FormProjectnaam", nameProject);
        localStorage.setItem("Date", datum);
        localStorage.setItem("Aantal uren", hour);


    }

    return (

        <>
            {/*Hier staat de counter*/}
            <div className="counter">
                <p>Totaal aantal uur:</p>
                <div className="counter-area">
                    <p>{hour} uur</p>
                </div>
            </div>

            <div className="body--flex">

                {/*Hier staat de pink-section*/}
                <div className="pink--left">
                    <PinkNavLog/>
                </div>

                {/*Hier staat de inhoud van de rechter container*/}
                <main className="inner-container-right">


                    <h1> Bestellijst</h1>


                    <form onBlur={handleSubmit(onFormSubmit)}>
                        {/*Hier begint de Algemene informatie*/}
                        <section>
                            <Titlesection
                                title="Algemeen"/>

                            <div className="twoInputField">
                                <FormFieldText
                                    type="text"
                                    title="Projectnaam"
                                    name="Projectnaam"
                                    id="Projectnaam"
                                    register={register}
                                />

                                <FormFieldText
                                    type="text"
                                    title="Eventmanager:"
                                    name="Eventmanager"
                                    id="Eventmanager"
                                    register={register}
                                />
                            </div>
                            <div className="twoInputField">

                                <FormFieldText
                                    type="date"
                                    title="Datum:"
                                    name="Date"
                                    id="Date"
                                    register={register}/>


                                <FormFieldText
                                    type="text"
                                    title="Creative:"
                                    name="Creative:"
                                    id="Creative:"
                                    register={register}/>


                            </div>
                        </section>

                    </form>

                    {/*Hier staat de functie weather*/}
                    <div>

                        <Weather/>

                    </div>


                    {/*Hier staat de sectie Deadlines*/}
                    <section>
                        <Titlesection
                            title="Deadlines"/>
                        <Workdays
                            title="Deadline eerste versie"/>
                        <Workdays
                            title="Deadline eerste versie"/>
                        <Workdays
                            title="Deadline Drukker"/>


                    </section>

                    <form onBlur={handleSubmit(onFormSubmit)}>
                        {/*Hier staat de sectie Branding bedrijf*/}
                        <section>
                            <Titlesection title="Branding bedrijf"/>
                            <div className="twoInputField--checkbox-textfield">
                                <div>
                                    <CheckboxSingle
                                        title="huisstijl aanwezig?"
                                        name="Aantal uur"
                                        id="huisstijl"
                                        register={register}/>

                                    <CheckboxSingle
                                        title="huisstijl nog ontwerpen?"
                                        name="B-Aantal uur"
                                        id="huisstijl"
                                        register={register}/>

                                </div>
                                <input
                                    type="link"
                                    placeholder="LINK naar Sharepoint"/>
                            </div>

                        </section>
                        {/*Hier staat de sectie Voortraject*/}
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

                        {/*Hier staat de sectie Grafisch (digitaal*/}
                        <section>
                            <Titlesection
                                title="Grafisch Digitaal"/>
                            <div className="layout-check--title">

                                <h4 className="col1 input-row-check"> Promotie digitaal</h4>
                                <h4 className="col2"> Afmeting</h4>
                                <h4 className="col3"> Aantal</h4>
                                <h4 className="col4"> Aantal uur</h4>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Uitnodiging/STD
                                    <input type="checkbox"
                                           value="5"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Banner email

                                    <input type="checkbox"
                                           value="2"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">2 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Webpagina Banner

                                    <input type="checkbox"
                                           value="2"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">2 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Social media

                                    <input type="checkbox"
                                           value="0.5"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">0.5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Display ads

                                    <input type="checkbox"
                                           value="4"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">4 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Infographic
                                    <input type="checkbox"
                                           value="8"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">8 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Digitaal magazine

                                    <input type="checkbox"
                                           value="12"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">12 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Banner

                                    <input type="checkbox"
                                           value="8"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Digitale flyer

                                    <input type="checkbox"
                                           value="4"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">4 uur</p>

                            </div>
                        </section>

                        {/*Hier staat de sectie Grafisch (drukwerk*/}
                        <section>
                            <Titlesection
                                title="Grafisch Drukwerk"/>
                            <div className="layout-check--title">

                                <h4 className="col1 input-row-check"> Promotie drukwerk</h4>
                                <h4 className="col2"> Afmeting</h4>
                                <h4 className="col3"> Aantal</h4>
                                <h4 className="col4"> Aantal uur</h4>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Uitnodiging/STD
                                    <input type="checkbox"
                                           value="5"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Banner ingang

                                    <input type="checkbox"
                                           value="3"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">3 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Flyer

                                    <input type="checkbox"
                                           value="4"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">4 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Poster

                                    <input type="checkbox"
                                           value="5"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Plattegrond

                                    <input type="checkbox"
                                           value="8"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">8 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Menu / Naamkaartje diner
                                    <input type="checkbox"
                                           value="2"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">2 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Sticker

                                    <input type="checkbox"
                                           value="1"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">1 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Beachflags

                                    <input type="checkbox"
                                           value="1.5"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">1.5 uur</p>

                            </div>
                            <div className="layout-check">
                                <label className="container col1">
                                    Meten = weten bord

                                    <input type="checkbox"
                                           value="2"
                                           {...register("uren")}/>
                                    <span className="checkmark"/>
                                </label>

                                <label className="col2">
                                    <input
                                        type="text"/>
                                </label>
                                <label className="col3">
                                    <input
                                        type="text"/>
                                </label>
                                <p className="col4">2 uur</p>

                            </div>
                        </section>
                        {/*Hier staat de sectie thanks knopt*/}
                        <section className="klaar">


                            <ButtonBasic
                                link="/thanks"
                                title="Klaar!"
                                type="submit"
                            />


                        </section>
                    </form>

                </main>
            </div>


        </>


    )
}

export default Form
