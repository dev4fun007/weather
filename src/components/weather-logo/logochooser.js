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
        
        case "Drizzle": weatherLogo = rainy;
        case "Rain": weatherLogo = rainy; break;

        case "Clouds": weatherLogo = cloudy; break;
        case "Thunderstorm": weatherLogo = thunder; break;
        case "Snow": weatherLogo = snowy; break;
        
        case "Fog": weatherLogo = windy;
        case "Dust": weatherLogo = windy;
        case "Ash": weatherLogo = windy;
        case "Tornado": weatherLogo = windy;
        case "Smoke": weatherLogo = windy;
        case "Mist": weatherLogo = windy;
        case "Haze": weatherLogo = windy;
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
