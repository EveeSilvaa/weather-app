const CurrentWeather = () => {
  return (
    <div className="current-weather">
        <img src="src/img/nuvem-sol.png" className="weather-icon" />
        <h2 className="temperature">
          20<span>°C</span>
        </h2>
        <p className="description">Partly cloundy</p>
    </div>
  );
};

export default CurrentWeather;