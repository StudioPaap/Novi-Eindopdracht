import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from "axios";
import "./Date input.css"

function Date() {
    const {handleSubmit, register, formState: {errors}} = useForm()
    const current = new Date();
    const date = `${current.getFullYear()}-0${current.getMonth() + 1}-0${current.getDate()}`;
    const [workingday, setWorkingdays] = useState(0);

    const [endDate, setDateEvent] = useState(date)

    function onFormSubmit(data) {
        console.log(data.Year)
        console.log(data.month)
        console.log(data.day)
        const dateNew = `${data.Year}-${data.month}-${data.day}`;
        console.log(dateNew);
        setDateEvent(dateNew)
    }


    useEffect(() => {
        const source = axios.CancelToken.source();

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
                'X-RapidAPI-Host': 'working-days.p.rapidapi.com',
                cancelToken: source.token,
            }
        };

        axios.request(options).then(function (response) {

            console.log(response.data.result.working_days.total);
            const workdaysTotal = response.data.result.working_days.total;
            setWorkingdays(workdaysTotal);

            return function cleanup() {
                source.cancel();
            }
        }).catch(function (error) {
            console.error(error);
        });


    }, [endDate]);


    return (
        <>


            <form onBlur={handleSubmit(onFormSubmit)}>
                <p className="titelDate">Drukker</p>
                <div className= "date-input">
                    <div>
                        <input
                            type="number"
                            placeholder="day"
                            {...register("day",

                                {
                                    minLength: {
                                        value: 2,
                                        message: "dag moet uit 2 cijfers bestaan"
                                    },
                                    maxLength: {
                                        value: 2,
                                        message: "dag moet uit 2 cijfers bestaan"
                                    },
                                    max: {
                                        value: 31,
                                        message: "Ongeldige invoer voor dag"
                                    },
                                })}
                        />
                        {errors.day && <p>{errors.day.message}</p>}
                    </div>
                    <div>
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
                                    max: {
                                        value: 12,
                                        message: "Ongeldige invoer voor maand"
                                    },
                                })}
                        />
                        {errors.month && <p>{errors.month.message}</p>}
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder="Year"
                            {...register("Year",
                                {
                                    minLength: {
                                        value: 4,
                                        message: "Jaartal moet uit 4 cijfers bestaan"
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "Jaar moet uit 4 cijfers bestaan"
                                    },
                                    min: {
                                        value: 2022,
                                        message: "Ongeldige invoer voor jaar"
                                    },
                                    max: {
                                        value: 3022,
                                        message: "Ongeldige invoer voor jaar"
                                    },
                                })}
                        />
                        {errors.Year && <p>{errors.Year.message}</p>}
                    </div>
                </div>

            </form>

            <p> Er zijn nog {workingday} dagen tot de deadline!</p>
        </>
    );
}

export default Date;