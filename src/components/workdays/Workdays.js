import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from "axios";
import "./Workdays.css"


function Workdays({title}) {
    const {handleSubmit, register, formState: {errors}} = useForm()
    const current = new Date();
    const date = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
    const [workingday, setWorkingdays] = useState(0);
    const [endDate, setDateEvent] = useState(date)

    function onFormSubmit(data) {
        const dateNew = `${data.Year}-${data.month}-${data.day}`;
        console.log(dateNew);
        setDateEvent(dateNew)
    }


    useEffect(() => {

        async function fetchWorkingday() {
            // const dateApiKey = process.env.REACT_DATE_API_KEY

            const source = axios.CancelToken.source();


            try {
                const response = await axios.get(`https://working-days.p.rapidapi.com/analyse`, {
                    params: {
                        country_code: 'NL',
                        start_date: date,
                        end_date: endDate,
                    },
                    headers: {
                        'X-RapidAPI-Key': '2c5d0969dcmsh71b46a2200837b9p183a69jsn4e2a005042d5',
                        'X-RapidAPI-Host': 'working-days.p.rapidapi.com',
                        cancelToken: source.token,
                    },
                });

                console.log(response.data.result.working_days.total);
                const workdaysTotal = response.data.result.working_days.total;
                setWorkingdays(workdaysTotal);

                return function cleanup() {
                    source.cancel();
                }
            } catch (e) {
                console.error(e);
            }
        }

        if (endDate) {
            fetchWorkingday();
        }
    }, [endDate]);


    return (
        <>
            <p className="titelDate">{title}</p>
            <div className="container-date-input">
                <form onBlur={handleSubmit(onFormSubmit)}>


                    <div className="date-input">
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
                                            value: 2023,
                                            message: "Ongeldige invoer voor jaar"
                                        },
                                    })}
                            />
                            {errors.Year && <p>{errors.Year.message}</p>}
                        </div>
                        {Object.keys(workingday).length > 1 &&
                            <>
                                <p> Er zijn nog {workingday} werkdagen tot de deadline!</p>
                            </>
                        }

                    </div>

                </form>

            </div>
        </>
    );
}

export default Workdays;