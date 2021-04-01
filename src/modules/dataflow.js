const getForecast = async (city, isDegree) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${isDegree}&appid=e32142723756b55b8ac542878b62709a`);
  const data = await response.json();
  if (response.ok){
    let forecast = data.weather[0].main;
    let temperature = data.main.temp;
    let forecastIcon = data.weather[0].icon;
    return {forecast, temperature, forecastIcon}
  } else {
    return (data.message);
  }
};

export { getForecast as default };