require("dotenv").config();
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.WEATHER_TOKEN
  }/${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.");
    } else if (response.body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${
          response.body.currently.temperature
        } degrees. There is  ${
          response.body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
