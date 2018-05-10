'use strict'

let request = require('request');

module.exports = {
  fetchForecast: function(lat, lng, callback) {
    let req = 'https://api.darksky.net/forecast/cfea5bca03dc0cec7fba071cca4e6e65/' + lat + ',' + lng;

    request(req, function(error, response, body) {
      let data;
      if (body) {
        data = JSON.parse(body)
      }
      if (error) {
        callback("unable to connect")
      }
      else if (data.code == 400) {
        callback("unable to find address")
      }
      else {
        callback('API call succeeded', 'The current temp is: ' + data.currently.temperature)
      }
    })
  }
}
