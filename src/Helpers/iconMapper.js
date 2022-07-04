import React from "react";

import { ReactComponent as Sunny } from "../assets/Sunny.svg";
import { ReactComponent as Windy } from "../assets/windy.svg";
import { ReactComponent as Rainy } from "../assets/Rainy.svg"

function iconMapper(weather) {
    switch (weather) {
        case 'Clear':
            return <Sunny/>;
        case 'Rain':
            return <Rainy/>;
        case 'Mist':
            return <Windy/>;

    }
}

