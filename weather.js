const https = require('https');
const api = require('./api.json');

//Print out temp details
function printWeather(weather) {
  const message = `Current temperature in ${weather.city.name} is ${weather.list[0].main.temp}F`;
  console.log(message);
}

//Print out error message

function get(query) {
  const request = https.get(`https://api.openweathermap.org/data/2.5/forecast?id=${query}&APPID=${api.key}`, response => {
    let body = "";
    //Read the data
    response.on('data', chunk => {
      body += chunk;
    })
    response.on('end', () => {
      const weather = JSON.parse(body);
      //Print the data
      printWeather(weather);
    })
  })
}

module.exports.get = get;

//TODO: Handle any Errors
