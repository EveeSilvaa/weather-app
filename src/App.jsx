import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { weatherCodes } from "./constants";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  //Busca detalhes meteorológicos com base no URL da API
  const getWeatherDeatails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // extrair dados meteorológicos atuais
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) => weatherCodes[icon].includes(data.
      current.condition.code));

      setCurrentWeather({ temperature, description, weatherIcon });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container">
     {/* seção de pesquisa */}
    <SearchSection getWeatherDeatails={getWeatherDeatails}/>

    {/* seção de pesquisa */}
    <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

    {/* lista de previsão do tempo por hora */}
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
