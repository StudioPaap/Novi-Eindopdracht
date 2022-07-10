import React, {useEffect, useState, useContext} from "react";
import "./Thanks.css";
import axios from "axios";
import PinknavRight from "../../Components/Pinknav/pinknav-right";
import ButtonBasic from "../../Components/Buttons/button";
import spiegel from "../../assets/Spiegel.png"
import {AuthContext} from "../../context/AuthContext--test";


function ThanksPage() {
    const {user: {username}} = useContext(AuthContext);
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
                    Bedankt {username}!!
                    Hier een mooie boodschap voor jou :
                </h2>
                {compliment && <>
                    <div className="compliment--text"> <h2>{compliment}</h2></div>
                </> }
                <img src={spiegel} alt="Spiegel"/>;
                <section className="Button--beneden">

                        <ButtonBasic
                            link="dashboard"
                            title="Terug naar Dashboard"
                        />

                </section>


            </main>
                <div className="pink--right">
                    <PinknavRight

                        title="Bedankt!"
                    />
                </div>
            </div>
        </>

    )
}


export default ThanksPage