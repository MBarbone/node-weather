require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("New York City", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(37.8267, -122.4233, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
