import getForecast from './modules/dataflow';
import domFuncs from './modules/domFuncs';

const getButton = document.getElementById('getForecast');
const unitSwitch = document.getElementById('unitSwitch');

getButton.addEventListener('click', () => {
  const units = domFuncs.unitSelect();
  const result = getForecast(domFuncs.getCity(), units.isDegree);
  result
    .then(
      data => {
        if (typeof data === 'string') {
          domFuncs.printError(data);
        } else {
          domFuncs.updateWeather(data, units.unit);
        }
      },
    );
});

unitSwitch.addEventListener('click', domFuncs.toggleUnit);