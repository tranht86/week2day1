// index2.js

var request = require('request')
var googleMapsAPI = require('./googleMapsAPI')


var hardCodedAddress = "46%20Spadina%20Ave"


googleMapsAPI.getPostalCode(process.argv[2], function(postalCode) {
  console.log("The postal code is: ", postalCode);
})

