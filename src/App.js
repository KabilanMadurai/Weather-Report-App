import { useState } from "react";
import axios from "axios";
import "./App.css";

import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";

function App() {
const [city, setCity] = useState("");

const [weather, setWeather] = useState(null);

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleSearch = async () => {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    setError("Please enter a city name.");
    return;
  }

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`;

  setLoading(true);
  setError("");

  try {
    const response = await axios.get(API_URL);

    const data = response.data;

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      pressure: data.main.pressure,
    };

    setWeather(weatherData);

  } catch (error) {
    if (error.response?.status === 404) {
      setError("City not found. Please check the city name.");
    } else if (error.response?.status === 401) {
      setError("Weather service authorization failed.");
    } else {
      setError("Unable to fetch weather data. Please try again.");
    }

  } finally {
    setLoading(false);
  }
};
  return (
    <main className="app">

      <section className="weather-container">

        <header className="weather-header">
          <p className="eyebrow">REAL-TIME WEATHER</p>

          <h1>Weather Report</h1>

          <p className="subtitle">
            Check the current weather conditions for any city around the world.
          </p>
        </header>

        <WeatherSearch
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />
        {!weather && !loading && !error && (
  <div className="welcome-message">
    <div className="welcome-icon">🌤️</div>

    <h2>Search for a city</h2>

    <p>
      Enter a city name above to see the current weather conditions.
    </p>
  </div>
)}

        {loading && (
  <div className="status-message loading-message">
    <span className="loader"></span>
    <p>Fetching weather data...</p>
  </div>
)}

{error && (
  <div className="status-message error-message">
    <p>⚠️ {error}</p>
  </div>
)}

{!loading && !error && weather && (
  <WeatherCard weather={weather} />
)}

      </section>

    </main>
  );
}

export default App;