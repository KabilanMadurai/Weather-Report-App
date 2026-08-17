function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <section className="weather-card">

      <div className="location">
        <h2>{weather.city}</h2>
        <p>{weather.country}</p>
      </div>

      <div className="temperature">
        <span>{weather.temperature}</span>
        <sup>°C</sup>
      </div>

     <div className="weather-condition">
  <img
    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
    alt={weather.description}
  />

  <p>{weather.description}</p>
</div>

      <div className="weather-details">

        <article className="detail">
          <span className="detail-icon">💧</span>
          <div>
            <p>Humidity</p>
            <strong>{weather.humidity}%</strong>
          </div>
        </article>

        <article className="detail">
          <span className="detail-icon">💨</span>
          <div>
            <p>Wind Speed</p>
            <strong>{weather.windSpeed} m/s</strong>
          </div>
        </article>

        <article className="detail">
          <span className="detail-icon">🌡️</span>
          <div>
            <p>Feels Like</p>
            <strong>{weather.feelsLike}°C</strong>
          </div>
        </article>

        <article className="detail">
          <span className="detail-icon">🔵</span>
          <div>
            <p>Pressure</p>
            <strong>{weather.pressure} hPa</strong>
          </div>
        </article>

      </div>

    </section>
  );
}

export default WeatherCard;