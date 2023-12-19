import React from "react";
import "./App.css";

export default function Weatherengine() {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type any city.."
                autofocus="on"
                autocomplete="off"
                id="city-input"
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
        <h1 id="city">New York</h1>
        <ul>
          <li id="date">Wednesday 12:55</li>
          <li id="description">Clear</li>
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
              <span className="temperature">3°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
