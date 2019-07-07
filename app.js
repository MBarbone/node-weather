require("dotenv").config();
const request = require("request");

const weatherUrl = `https://api.darksky.net/forecast/${
  process.env.WEATHER_TOKEN
}/37.8267,-122.4233`;

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service.");
  } else if (response.body.error) {
    console.log("Unable to find location.");
  } else {
    console.log(
      `It is currently ${
        response.body.currently.temperature
      } degrees. There is  ${
        response.body.currently.precipProbability
      }% chance of rain.`
    );
  }
});

const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/clifton.json?access_token=${
  process.env.GEOCODE_TOKEN
}&limit=1`;

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geocoding service.");
  } else if (response.body.message) {
    console.log("No Location provided.");
  } else if (response.body.features.length === 0) {
    console.log("Location not found");
  } else {
    console.log(
      response.body.features[0].center[0] +
        ", " +
        response.body.features[0].center[1]
    );
  }
});
