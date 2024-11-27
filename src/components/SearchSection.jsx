const SearchSection = ({ getWeatherDeatails }) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    
    // handles city search form submission //
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
        getWeatherDeatails(API_URL); // Fetches weather details for the entered city
    }
  return (
    <div className="search-section">
    <form action="#" className="search-form" onSubmit={handleCitySearch}>
      <span className="bi bi-search"></span>
      <input type="search" placeholder="Enter a city name" 
      className="search-input" required />
    </form>
    <button className="location-button">
    <span className="bi bi-geo-alt"></span>
    </button>
  </div>
  );
};

export default SearchSection;