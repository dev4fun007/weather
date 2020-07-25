import React from 'react';
import './logochooser.css';
import cloudy from '../../assets/cloudy.gif';
import windy from '../../assets/windy.gif';
import thunder from '../../assets/thunder.gif';
import rainy from '../../assets/rainy.gif';
import snowy from '../../assets/snowy.gif';
import sunny from '../../assets/sunny.gif';


export default function Logochooser(props) {
    let weatherLogo = sunny;
    const weatherState = props.weatherState;
    switch (weatherState) {
        case "Clear": weatherLogo = sunny; break;
        
        // eslint-disable-next-line
        case "Drizzle": weatherLogo = rainy;
        // eslint-disable-next-line
        case "Rain": weatherLogo = rainy; break;

        case "Clouds": weatherLogo = cloudy; break;
        case "Thunderstorm": weatherLogo = thunder; break;
        case "Snow": weatherLogo = snowy; break;
        
        // eslint-disable-next-line
        case "Fog": weatherLogo = windy;
        // eslint-disable-next-line
        case "Dust": weatherLogo = windy;
        // eslint-disable-next-line
        case "Ash": weatherLogo = windy;
        // eslint-disable-next-line
        case "Tornado": weatherLogo = windy;
        // eslint-disable-next-line
        case "Smoke": weatherLogo = windy;
        // eslint-disable-next-line
        case "Mist": weatherLogo = windy;
        // eslint-disable-next-line
        case "Haze": weatherLogo = windy;
        // eslint-disable-next-line
        case "Squall": weatherLogo = windy; break;
        default: weatherLogo = sunny;
    }


    return (
        <div>
            <div className="header">
                <img className="weatherIcon" src={weatherLogo} alt="weather logo" />
                <span className="weatherInfo">{weatherState}</span>
            </div>
        </div>
    )
}
