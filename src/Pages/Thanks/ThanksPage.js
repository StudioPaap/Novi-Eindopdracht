import React, {useEffect, useState} from "react";
import "./Thanks.css";
import axios from "axios";
import PinknavRight from "../../Components/Pinknav/pinknav-right";
import ButtonBasic from "../../Components/Buttons/button";
import {Link} from "react-router-dom";
import spiegel from "./Spiegel.png"


function ThanksPage() {
    const [ compliment, setCompliment]  = useState()

    useEffect(() => {

        async function fetchCompliment() {
            try {
                const result = await axios.get('https://complimentr.com/api');
                const response = result.data.compliment;
                setCompliment(response)
                console.log(response)


            } catch (e) {
                console.error(e);
            }

        }


        fetchCompliment()

    });

    return (
        <>
            <header>
                <PinknavRight

                    title='Thanks User'
                />

            </header>

            <main className="inner-container-left thanks">
                {compliment && <>
                    <h2>{compliment}</h2>
                </> }
                <h2>
                    Hier een mooie boodschap voor jou :
                </h2>
                <img src={spiegel}/>;

                <section className="Button--beneden">
                    <Link to="/">
                        <ButtonBasic
                            title="Terug naar Dashboard"
                        />
                    </Link>
                </section>


            </main>
        </>

    )
}


export default ThanksPage