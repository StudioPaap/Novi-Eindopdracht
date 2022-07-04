import React from 'react';
import CheckboxRow1 from "../../Components/Checkbox--row/Checkbox--row";


function Test(){

    const formName = localStorage.getItem("FormProjectnaam")
    console.log(formName)
    const formHours = localStorage.getItem("FormHour")

return(
    <><h1>
        {formName}
    </h1>

<div>

    <p>{formHours} uur in totaal voor </p>
</div>
    </>
);
}
export default Test;