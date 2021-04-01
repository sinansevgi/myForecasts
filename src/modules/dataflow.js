const getForecast = async (city, isDegree, appid) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${isDegree}&appid=${appid}`);
  const data = await response.json();
  if (response.ok) {
    const forecast = data.weather[0].main;
    const temperature = data.main.temp;
    const forecastIcon = data.weather[0].icon;
    const city = data.name;
    return {
      forecast, temperature, forecastIcon, city,
    };
  }
  return (data.message);
};

export { getForecast as default };