import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherDataengine() {
  const [searchData, setsearchData] = useState({ loaded: false });
  const [city, setCity] = useState(null);

  function handleResponse(response) {
    setsearchData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (searchData.ready) {
    return (
      <div>
        <div className="container">
          <div className="weather-app">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Enter any city.."
                    autofocus="on"
                    autocomplete="off"
                    onChange={changeCity}
                    class="form-control shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-100"
                  />
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <h1> {searchData.city}</h1>
            <ul>
              <li id="date">Wednesday 12:55</li>
              <li id="description"> {searchData.description}</li>
            </ul>
            <div className="row">
              <div className="clearfix">
                <img
                  src="http://openweathermap.org/img/wn/01n@2x.png"
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <div className="float-left">
                  <span className="temperature">{searchData.temperature}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading Data..";
  }
}
