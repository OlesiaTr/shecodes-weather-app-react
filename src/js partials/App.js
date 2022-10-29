import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "../css partials/App.css";

export default function App({ defaultTemp, data }) {
  const hideItem = document.querySelector(".main-window");

  const withoutInput = (
    <div className="wrap">
      <div className="degrees-choice">
        <span>
          {/* TO TURN BACK INTO LINKS */}
          <button href="#" id="celsius">
            °C
          </button>{" "}
          |{" "}
          <button href="#" id="fahrenheit">
            °F
          </button>
        </span>
      </div>
      <div className="main-text">
        <h1 id="temp">{defaultTemp}°C</h1>
        <h2 id="weather">Partly cloudy</h2>
      </div>
    </div>
  );

  if (data === undefined) {
    return <section className="main-window">{withoutInput}</section>;
  } else {
    hideItem.classList.add("hidden");
    return (
      <section className="main-window">
        <div className="main-text">
          <h1 id="temp">{Math.round(data.temp)}°C</h1>
          <h2 id="weather">{data.desc}</h2>
        </div>
        <div className="degrees-choice">
          <span>
            {/* TO TURN BACK INTO LINKS */}
            <button href="#" id="celsius">
              °C
            </button>{" "}
            |{" "}
            <button href="#" id="fahrenheit">
              °F
            </button>
          </span>
        </div>
      </section>
    );
  }
}
