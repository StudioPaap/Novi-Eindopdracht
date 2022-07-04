import React, {useState, useEffect} from "react";
import axios from "axios";
import PlaceWeatherInput from "../../Components/Form-input/Place-weather input/PlaceWeather";
import kelvinToCelsius from "../../Helpers/KelvinToCelsius/KelvinToCelsius";
import "./Weather.css"

const apiKey = 'b0897ee5497502fd0ef07dba8c99c7e3';

function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
                toggleLoading(true);
            }
        }

        toggleLoading(false);
        if (location) {
            fetchData();
        }
    }, [location]);


    return (

        <span className="location-details twoInputField">
             <PlaceWeatherInput setLocationHandler={setLocation}/>
            {loading && <span>Loading...</span>}
            {error &&
                <span className="wrong-location-error">
    	Oeps! Deze locatie bestaat niet
    </span>
            }
            {Object.keys(weatherData).length > 0 &&
                <>
                    <div className="weather-result">
                    <h2>{weatherData.weather[0].description}</h2>
                    <h1>{kelvinToCelsius(weatherData.main.temp)}</h1>
                    </div>
                </>
            }


    </span>
    );

}

export default Weather