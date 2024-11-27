import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { weatherCodes } from "./constants";

const App = () => {
  const [CurrentWeather, setCurrentWeather] = useState({});

  //Fetches weather details based on the API url
  const getWeatherDeatails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // extract current weather data
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code));

      setCurrentWeather({temperature, description, weatherIcon});
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container">
     {/* search section */}
    <SearchSection getWeatherDeatails={getWeatherDeatails}/>

    {/* search section */}
    <div className="weather-section">
      <CurrentWeather currentWeather={ CurrentWeather }/>

    {/* hourly weather forecast list */}
      <div className="hourly-forecast">
        <ul className="weather-list">
         <HourlyWeatherItem/>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default App;
