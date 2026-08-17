function WeatherSearch({ city, setCity, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="search-section" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city name..."
        aria-label="Enter city name"
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;