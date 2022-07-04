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
                console.log(response);

            }
            catch (e) {
                console.error(e);
            }

        }

        fetchCompliment()

    },[]);

    return (
        <>
            <div className="body--flex">

            <main className="inner-container-right thanks">

                <h2>
                    Bedankt!!
                    Hier een mooie boodschap voor jou :
                </h2>
                {compliment && <>
                    <div className="compliment--text"> <h2>{compliment}</h2></div>
                </> }
                <img src={spiegel}/>;

                <section className="Button--beneden">
                    <Link to="/">
                        <ButtonBasic
                            title="Terug naar Dashboard"
                        />
                    </Link>
                </section>


            </main>
                <div className="pink--right">
                    <PinknavRight

                        title='Thanks User'
                    />
                </div>
            </div>
        </>

    )
}


export default ThanksPage