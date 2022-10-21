import React /*{ useState }*/ from "react";
// import axios from "axios";

import "../css partials/InputForm.css";

export default function InputForm() {
  // const [city, setCity] = useState("");
  // const [weather, setWeather] = useState({});
  // const [loaded, setLoaded] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // const API_KEY = "8f5def28851f5cf815cb404385490799";
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // axios.get(API_URL).then(showWeather);
  }

  function updateInput(e) {
    // setCity(e.target.value);
  }

  // function showWeather({ data }) {
  //   setLoaded(true);
  //   setWeather({
  //     temp: data.main.temp,
  //     desc: data.weather[0].description,
  //     humidity: data.main.humidity,
  //     wind: data.wind.speed,
  //     icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  //   });
  // }

  return (
    <div className="input-form InputForm">
      <form id="search-form" onSubmit={handleSubmit}>
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
    </div>
  );
}
