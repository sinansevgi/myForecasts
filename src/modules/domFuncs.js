const backgroundChanger = (data) => {
  if (['01d', '01n', '02d', '02n'].includes(data)) {
    return ('sunny');
  } if (['03d', '03n', '04d', '04n'].includes(data)) {
    return ('cloudy');
  } if (['09d', '09n', '10d', '10n'].includes(data)) {
    return ('rainy');
  }
  return ('snowy');
};

const unitSelect = () => {
  const unitSwitch = document.getElementById('unitSwitch');
  const tempUnit = document.getElementById('tempUnit');
  if (unitSwitch.checked) {
    tempUnit.textContent = '  C°';
    return { isDegree: 'metric' };
  }
  tempUnit.textContent = '  F°';
  return { isDegree: 'imperial' };
};

const updateWeather = (data) => {
  const resultTitle = document.getElementById('weatherTitle');
  const resultField = document.getElementById('weatherInfo');
  const backgroundContainer = document.querySelector('.container');
  const forecastLogo = document.getElementById('forecastLogo');

  const cityName = document.getElementById('city');
  resultTitle.textContent = `${data.forecast}`;
  resultField.textContent = `${data.temperature}`;
  forecastLogo.setAttribute('src', `http://openweathermap.org/img/wn/${data.forecastIcon}@4x.png`);
  backgroundContainer.classList = [];
  backgroundContainer.classList.add('container', backgroundChanger(data.forecastIcon));
  cityName.textContent = data.city;
};

const printError = (error) => {
  const resultTitle = document.getElementById('weatherTitle');
  const resultField = document.getElementById('weatherInfo');
  const cityName = document.getElementById('city');
  const backgroundContainer = document.querySelector('.container');
  cityName.textContent = '';
  resultField.textContent = '';
  resultTitle.textContent = error;
  backgroundContainer.classList = [];
  backgroundContainer.classList.add('container');
};

const getCity = () => {
  const searchBox = document.getElementById('searchField');
  return searchBox.value;
};

const toggleUnit = () => {
  const current = unitSelect();
  const resultField = document.getElementById('weatherInfo');
  if (!(resultField.textContent.length < 1)) {
    if (current.isDegree === 'metric') {
      let temp = Number(resultField.textContent);
      temp = Math.round(((temp - 32) / 1.80));
      resultField.textContent = temp;
    } else {
      let temp = Number(resultField.textContent);
      temp = Math.round(((temp * 1.80) + 32));
      resultField.textContent = temp;
    }
  }
};

export default {
  backgroundChanger, unitSelect, updateWeather, getCity, printError, toggleUnit,
};