import React from 'react'
import './WeatherApp.css'

import clouds_icon from  "../Assets/clouds.png";
import search_icon from "../Assets/search.png";
import winds_icon from "../Assets/winds.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp= () => {

    let api_key = "119fb66e4bb8f3d687d3d54f9e08d68a";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log("fetched data",data);
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+ " %";
        wind[0].innerHTML = data.wind.speed+ " km/h";
        temperature[0].innerHTML = data.main.temp+ " °C";
        location[0].innerHTML = data.name;

    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=" "/>
                </div>
            </div>
            <div className="weather-image">
                <img src={clouds_icon} alt="" />
            </div>
            <div className="weather-temp">
                24°C
            </div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={winds_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">18 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp