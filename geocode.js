'use strict'

let request = require('request');

module.exports = {
  fetchCoords: function(location, callback) {
    const address = location;
    const BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const API_KEY = '&key=AIzaSyCXAl9VgD3FNQe2uzeogXf3gzKz7lX5IKQ';
    const req = BASE_URI + address + API_KEY;

    request(req, function(error, response, body) {
      let data = JSON.parse(body);
      console.log('error: ', error);
      console.log('statusCode: ', response.statusCode);
      if (error) {
        callback('Unable to connect')
      }
      else if (response.statusCode != 200) {
        callback('Unable to find address.')
      }
      else if (response.statusCode == 200 && data.status == 'OK') {
        callback(undefined, {
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng
        })
      }
    })
  }
}
