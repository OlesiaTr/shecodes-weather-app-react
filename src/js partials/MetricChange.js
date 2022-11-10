import React, { useState } from "react";

export default function MetricChange({ temperature, desc }) {
  const [unit, setUnit] = useState("celsius");

  function displayFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }

  function displayCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <section className="main-window">
        <div className="main-text">
          <h1 id="temp">{temperature}°C</h1>
          <h2 id="weather">{desc}</h2>
        </div>
        <div className="degrees-choice">
          <span>
            <a href="/" id="celsius" onClick={displayCels}>
              °C
            </a>{" "}
            |{" "}
            <a href="/" id="fahrenheit" onClick={displayFahr}>
              °F
            </a>
          </span>
        </div>
      </section>
    );
  } else {
    return (
      <section className="main-window">
        <div className="main-text">
          <h1 id="temp">{Math.round((temperature * 9) / 5 + 32)}°F</h1>
          <h2 id="weather">{desc}</h2>
        </div>
        <div className="degrees-choice">
          <span>
            <a href="/" id="celsius" onClick={displayCels}>
              °C
            </a>{" "}
            |{" "}
            <a href="/" id="fahrenheit" onClick={displayFahr}>
              °F
            </a>
          </span>
        </div>
      </section>
    );
  }
}
