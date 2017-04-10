var request = require('request')

var fs = require('fs')
console.log('Downloading image...')
request.get('https://sytantris.github.io/http-examples/future.jpg')

      .on('error', function (err){
        throw err;
      })
      .on('response', function(response) {
        console.log('Response status code: ', response.statusCode);
      })
      .pipe(fs.createWriteStream('./downloaded.jpg'));
      console.log('Download complete')