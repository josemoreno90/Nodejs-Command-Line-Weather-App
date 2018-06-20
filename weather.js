const https = require('https');
const api = require('./api.json');

//Print out temp details
//Print out error message

function get(query) {
  const request = https.get(`https://api.openweathermap.org/data/2.5/forecast?id=${query}&APPID=${api.key}`, response => {
    let body = "";
    //Read the data
    response.on('data', chunk => {
      body += chunk;
    })
    response.on('end', () => {
      console.log(body);
      //Parse data
      //Print the data
    })
  })
}

module.exports.get = get;

//TODO: Handle any Errors
