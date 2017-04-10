var request = require('request');


function getGoogleAPIRequest(endpoint, callback) {
  request(endpoint, function(error, response, body){
    if (error) {
      console.log("Got error: ", error)
      return
    }
    if (response.statuscode == 200) {
    var json = JSON.parse(body)
    callback(json)
  }
  })
}


function getPostalCode(address, callback) {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA1s68Mdbu3cRCQVWRARkiGoArv-T65bz4`

  getGoogleAPIRequest(url, function(json) {


  var postalCode = json.results[0].address_components[7].long_name
  console.log("Got postal code: ", postalCode);
  callback(postalCode);

  })
}

function getCity(address, callback) {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA1s68Mdbu3cRCQVWRARkiGoArv-T65bz4`
  request(url, function(error, response, body) {

    getGoogleAPIRequest(url, function(json) {
     var postalCode = json.results[0].address_components[3].long_name
     console.log("Got postal code: ", getcity);
     callback(postalCode);
    // }
    })
  })
}

module.exports = {
  getPostalCode: getPostalCode,
  getCity: getCity
}