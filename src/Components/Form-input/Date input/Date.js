import React from "react";
import axios from "axios";

 function Datenow() {
    const current = new Date();
    const date = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;
     const endDate = "2022-10-12"

     // const options = {
     //     method: 'GET',
     //     url: 'https://working-days.p.rapidapi.com/analyse',
     //     params: {
     //         country_code: 'NL',
     //         start_date: date,
     //         end_date: endDate,
     //     },
     //     headers: {
     //         'X-RapidAPI-Key': '7ab2a76c92msh8d3b37609c76359p13c5a9jsn6d16127b4146',
     //         'X-RapidAPI-Host': 'working-days.p.rapidapi.com'
     //     }
     // };
     //
     // axios.request(options).then(function (response) {
     //
     //     console.log(response.data.result.working_days.total);
     // }).catch(function (error) {
     //     console.error(error);
     // });
     //
     //
     //



     return (
        <div>
            <p>Current date is {date}</p>

        </div>
    );
}

export default Datenow;