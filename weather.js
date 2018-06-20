const https = require('https');
const api = require('./api.json');
const http = require('http');

//Print out temp details
function printWeather(weather) {
  const message = `Current temperature in ${weather.city.name} is ${weather.list[0].main.temp}F`;
  console.log(message);
}

//Print out error message
function printError(error) {
  console.error(error.message);
}


function get(query) {

  try {
    const request = https.get(`https://api.openweathermap.org/data/2.5/forecast?id=${query}&APPID=${api.key}`, response => {
      if (response.statusCode === 200) {
        let body = '';
           // Read the data
           response.on('data', chunk => {
             body += chunk;
           });
           response.on('end', () => {
             try {
               //Parse data
               const weather = JSON.parse(body);
               //Print the data
               printWeather(weather);
             } catch (error) {
               //Parser error
               printError(error);
             }
           });
         } else {
           // Status error code
           const statusErrorCode = new Error(`There was an error getting the message for "${query}". (${http.STATUS_CODES[response.statusCode]})`);
           printError(statusErrorCode);
         }
       });
     } catch (error) {
       printError(error);
     }
 }

 module.exports.get = get;
