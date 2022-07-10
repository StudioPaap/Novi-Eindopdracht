import React, {useState} from "react";
import "./PlaceWeather.css"

function PlaceWeatherInput({setLocationHandler}) {

    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        setLocationHandler(query);
    }


    return (
        <div className="twoInputField">
            <form className="searchbar" onSubmit={onFormSubmit}>
                <label htmlFor="plaats"> Plaats Event
                    <input
                        type="text"
                        id="plaats"
                        name="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Zoek een stad of plaats in Nederland"
                    />
                </label>

                <button type="submit">
                    Bekijk actueel weer
                </button>
            </form>
        </div>
    );
}

export default PlaceWeatherInput;