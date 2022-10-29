import React, { useState } from "react";
import axios from "axios";

import App from "./App";
import CityDateInfo from "./CityDateInfo";

import "../css partials/InputForm.css";

axios.defaults.baseURL = "https://api.shecodes.io/weather/v1/";
const API_KEY = "b79c9a9470f515de3ta16657f46do7bf";

export default function InputForm() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ loaded: false });

  function handleSubmit(e) {
    e.preventDefault();

    const API_URL = `current?query=${city}&key=${API_KEY}&units=metric`;
    axios.get(API_URL).then(showWeather);
  }

  function updateInput(e) {
    setCity(e.target.value);
  }

  const form = (
    <form id="search-form" onSubmit={handleSubmit} className="search-form">
      <input
        type="search"
        name="citySearch"
        id="search-input"
        className="rounded-pill custom"
        autoComplete="off"
        onChange={updateInput}
      />
      <input
        type="submit"
        value="Search"
        className="rounded-pill bg-transparent"
      />
      <input
        type="submit"
        value="Current position"
        className="rounded-pill bg-transparent"
        id="current-position"
      />
    </form>
  );

  function showWeather({ data }) {
    console.log(data);
    if (data.message === "City not found") {
      return alert("Please, type correct name of the city");
    }
    setWeather({
      loaded: true,
      time: data.time,
      city: data.city,
      country: data.country,
      temp: data.temperature.current,
      desc: data.condition.description,
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png`,
    });
  }

  if (weather.loaded) {
    return (
      <div className="input-form InputForm">
        <App data={weather} />
        {form}
        <CityDateInfo data={weather} />
      </div>
    );
  } else {
    return <div className="input-form InputForm">{form}</div>;
  }
}
