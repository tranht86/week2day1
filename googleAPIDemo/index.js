//Google API Key: AIzaSyA1s68Mdbu3cRCQVWRARkiGoArv-T65bz4

// 1. Accept an address ('46 Spadina Ave')


// 2. Query Google API with the address


// 3. Parse out the Postal Code


// 4. Return Postal Code

var request = require('request');

function getPostalCode(address, callback) {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA1s68Mdbu3cRCQVWRARkiGoArv-T65bz4`
  request(url, function(error, response, body) {
    if (error) {
      console.log("Got an error!", error)
      return
    }

    // if (response.statuscode == 200) {

     // console.log("Body is: ", body)
     var json = JSON.parse(body)
     console.log("Parsed json is: ", json);
     var postalCode = json.results[0].address_components[7].long_name
     console.log("Got postal code: ", postalCode);
     callback(postalCode);
    // }
  })
}

var hardCodedAddress = "46%20Spadina%20Ave"

getPostalCode(process.argv[2], function(postalCode) {
  console.log("The postal code is: ", postalCode);
})