var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if (request.method == 'GET') {
    if (parsedUrl.pathname == '/listings') {
      response.writeHead(200, {
        'Content-Type': 'application/json'});
      console.log(listingData)
      response.end(listingData);
    } else {
      response.writeHead(404, {
        'Content-Type': 'application/json'});
      response.end("Bad gateway error");
    }
  } else {
    response.writeHead(404, {
      'Content-Type': 'application/json'});
    response.end("Bad gateway error");
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
   listingData = data;
});

http.createServer(requestHandler).listen(port);
