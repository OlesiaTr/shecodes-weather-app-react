export default function WeatherForecastDay({ data }) {
  const max = () => {
    return `${Math.round(data.temperature.maximum)}°`;
  };

  const min = () => {
    return `${Math.round(data.temperature.minimum)}°`;
  };

  const day = () => {
    const date = new Date(data.time * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  };

  return (
    <div className="col">
      <div className="forecast__date">{day()}</div>
      <img
        src={data.condition.icon_url}
        alt={data.condition.description}
        className="forecast__icon"
      />
      <div className="forecast__temp">
        <span className="temp-max">{max()} </span>
        <span className="weather-forecast-temperature-min"> {min()}</span>
      </div>
    </div>
  );
}
