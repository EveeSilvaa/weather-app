import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";

const App = () => {
  const [CurrentWeather, setCurrentWeather] = useState({});

  //Fetches weather details based on the API url
  const getWeatherDeatails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;

      setCurrentWeather({temperature, description});
    } catch (error) {
      console.log(error);
    }
  };


  return <div className="container">
   {/* search section */}
   <SearchSection getWeatherDeatails={getWeatherDeatails}/>


    {/* search section */}
    <div className="weather-section">
      <CurrentWeather/>

      {/* hourly weather forecast list */}
      <div className="hourly-forecast">
        <ul className="weather-list">
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
         <HourlyWeatherItem/>
        </ul>
      </div>
    </div>
  </div>;
};

export default App;
