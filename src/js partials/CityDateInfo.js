import "../css partials/CityDateInfo.css";

export default function CityDateInfo() {
  return (
    <div className="CityDateInfo">
      <div className="city-info">
        <h3>
          <span id="city"> Kharkiv</span> <span id="country">, Ukraine</span>
        </h3>
      </div>
      <div className="date-info">
        <h4 id="date">Sunday | June 26 | 19:47</h4>
      </div>
    </div>
  );
}
