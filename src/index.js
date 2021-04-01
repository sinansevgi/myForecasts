import getForecast from "./modules/dataflow";
const result = getForecast('gelibolu','metric');
console.log(result.then(console.log));