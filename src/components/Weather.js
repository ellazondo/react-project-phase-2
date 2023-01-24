import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  function handleResponse (response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  if (ready) {
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
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <strong>{temperature}</strong> °F 
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
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
  return "Loading...";
  }
  
}




