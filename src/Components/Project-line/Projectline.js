import React from "react";
import './Projectline.css';
import star from "./ster-paars.svg";
import { saveAs } from "file-saver";



function Projectline({title,  datum, hour, action}){

    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };





    return(
<>

                <div className="project-line">
                    <div className="project-title">
                        <img className='star' src={star} alt="sterlogo"/>
                        <h3>{title}</h3>

                        <h4> {datum}</h4>
                        <p> Totaal design: {hour} uur</p>
                    </div>

                    <div className="buttons-project">
                        <button
                            onClick={action}> Remove
                        </button>
                        <button
                            onClick={saveFile}> Download
                        </button>
                    </div>

                </div>

</>
    )
}

export default Projectline