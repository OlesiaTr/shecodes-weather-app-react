import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import SvgLinks from "./js partials/SvgLinks";
import App from "./js partials/App";
import InputForm from "./js partials/InputForm";
import CityDateInfo from "./js partials/CityDateInfo";
import WeatherForecast from "./js partials/WeatherForecast";
import Footer from "./js partials/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <SvgLinks />
      <App />
      <InputForm />
      <CityDateInfo />
      <WeatherForecast />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
