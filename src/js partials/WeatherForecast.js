import "../css partials/WeatherForecast.css";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

const API_KEY = "b79c9a9470f515de3ta16657f46do7bf";

export default function WeatherForecast({ data }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);
  const { longitude, latitude } = data.coord;

  function handleResponse(r) {
    setForecast(r.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row" id="forecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    const API_URL = `forecast?lon=${longitude}&lat=${latitude}&key=${API_KEY}&units=metric`;
    axios.get(API_URL).then(handleResponse);
    return null;
  }
}
