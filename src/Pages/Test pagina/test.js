import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from "axios";

function Test() {
    const {handleSubmit, register, formState: {errors}} = useForm()
    const current = new Date();
    const date = `${current.getFullYear()}-0${current.getMonth() + 1}-0${current.getDate()}`;
    const endDate = "2022-07-12"
    const [workingday, setWorkingdays] = useState(0);

    // const [dateEvent, setDateEvent] = useState(date)

    function onFormSubmit(data) {
        console.log(data)
    }


    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://working-days.p.rapidapi.com/analyse',
            params: {
                country_code: 'NL',
                start_date: date,
                end_date: endDate,
            },
            headers: {
                'X-RapidAPI-Key': '2c5d0969dcmsh71b46a2200837b9p183a69jsn4e2a005042d5',
                'X-RapidAPI-Host': 'working-days.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.result.working_days.total);
            const workdaysTotal = response.data.result.working_days.total;
            setWorkingdays(workdaysTotal);


        }).catch(function (error) {
            console.error(error);
        });


    }, []);


    return (
        <>
            <p>hoi {workingday}</p>
            <form onBlur={handleSubmit(onFormSubmit)}>
                <input
                    type="number"
                    placeholder="Year"
                    {...register("Year",
                        {
                            minLength: {
                                value: 4,
                                message: "Jaartal moet uit 4 cijfers bestaan"
                            },
                        })}
                />
                {errors.Year && <p>{errors.Year.message}</p>}
                <input
                    type="number"
                    placeholder="month"
                    {...register("month",

                        {
                            minLength: {
                                value: 2,
                                message: "Maand moet uit 2 cijfers bestaan"
                            },
                            maxLength: {
                                value: 2,
                                message: "Maand moet uit 2 cijfers bestaan"
                            },
                            Max: {
                                value: 12,
                                message: "Ongeldige invoer voor maand"
                            },
                        })}
                />
                {errors.month && <p>{errors.month.message}</p>}

            </form>
        </>
    );
}

export default Test;