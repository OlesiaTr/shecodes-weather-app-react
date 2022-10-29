import "../css partials/CityDateInfo.css";

import FormattedDate from "./FormattedDate";

export default function CityDateInfo({ data }) {
  const hideItem = document.querySelector(".CityDateInfo");

  const now = new Date();

  if (data === undefined) {
    return (
      <div className="CityDateInfo">
        <div className="city-info">
          <h3>
            <span id="city"> Kharkiv</span> <span id="country">, Ukraine</span>
          </h3>
        </div>
        <div className="date-info">
          <h4 id="date">
            <FormattedDate date={now} />
          </h4>
        </div>
      </div>
    );
  } else {
    const newDate = new Date(data.time * 1000);
    hideItem.classList.add("hidden");
    return (
      <div className="CityDateInfo">
        <div className="city-info">
          <h3>
            <span id="city"> {data.city}</span>{" "}
            <span id="country">, {data.country}</span>
          </h3>
        </div>
        <div className="date-info">
          <h4 id="date">
            <FormattedDate date={newDate} />
          </h4>
        </div>
      </div>
    );
  }
}
