import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse (response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Wednesday 07:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    })
    
    
  }

  if (weatherData.ready) {
    return (
         <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
          />
          <strong>{weatherData.temperature}</strong> °F 
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    );
  } else {
    const apiKey = "7e51999498b98449960c3d517772a9e2";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  axios.get(apiUrl).then(handleResponse);
  return ( 
    <Spinner animation="grow" variant="success" />  
  );
  }
  
}






