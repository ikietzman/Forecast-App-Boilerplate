'use strict'

let yargs = require('yargs').argv;

let geocode = require('./geocode');
let forecast = require('./forecast');


geocode.fetchCoordsPromise(yargs.address)
  .then(function(loc) {
    console.log(loc);
  }, function (error) {
    console.log(error);
  })

// geocode.fetchCoords(yargs.address, function(message, loc) {
//   console.log(message);
//   console.log(loc);
//   forecast.fetchForecast(loc.lat, loc.lng, function(error, message) {
//     if (message) {
//       console.log(message);
//     }
//     else if (error) {
//       console.log(error);
//     }
//   });
// })
