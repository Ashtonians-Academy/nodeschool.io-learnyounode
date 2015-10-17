var http = require('http');
var bl = require('bl');

var response = [];
var fetched = 0;

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(response[i]);
}

function httpGet (i) {
  http.get(process.argv[2 + i], function (responseRaw) {
    responseRaw.pipe(bl(function (err, data) {
      if (err)
        return console.error(data);

      response[i] = data.toString();
      fetched++;

      if (fetched === 3)
        printResults();
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i);