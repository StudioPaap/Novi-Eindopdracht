import React from 'react';
import kelvinToCelsius from "../../Helpers/KelvinToCelsius/KelvinToCelsius";
import iconMapper from "../../Helpers/iconMapper";


function WeatherDetail({ description, temp, type }) {

    return (
        <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
            <p className="description">{description}</p>
            <p>{kelvinToCelsius(temp)}</p>
        </section>
    );
}
