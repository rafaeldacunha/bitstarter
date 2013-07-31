var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var infile =  "index.html";
var text = "";
fs.read(infile, function read(err, data) {
  if (err) throw err;
  text = data.toString();
  })
  
response.send(text);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
