import React, {useState} from "react"
import {useForm} from 'react-hook-form';
import "./Checkbox--row.css"

function CheckboxRow1() {
    const [hour, setHour]=useState(0)
    const {register, handleSubmit} = useForm();
    function onFormSubmit(data) {
        const uren = data.uren;
        console.log(uren[0]);

      const hourNumberArray = uren.map((uur) => {
            return Number(uur);
        });
        const SumHour = hourNumberArray.reduce((a, b) => a + b,0)
        console.log(SumHour)
            setHour(SumHour);


    }


    return (
        <>
            <div className="counter">
                <p>Totaal aantal uur:</p>
                <div className="counter-area">
<p>{hour} uur</p>
                </div>
            </div>

        <form onBlur={handleSubmit(onFormSubmit)}>

<div className="layout-check">
        <label className="container col1">
            Vormgeving
            <input type="checkbox"
                   value="5"
                   {...register("uren")}/>
            <span className="checkmark"/>
        </label>
<div className="col2">
    <label >
        <input
               type="text"/>
    </label>
</div>
</div>
            <label className="container col1">
                Stylen
                <input type="checkbox"
                       value="8"
                       {...register("uren")}/>
                <span className="checkmark"/>

            </label>

            <label className="container col1">
                draaien
                <input type="checkbox"
                       value="10"
                       name="hallo"
                       {...register("uren")}/>
                <span className="checkmark"/>

            </label>

</form>
        </>
)
}

export default CheckboxRow1;