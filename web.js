var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var infile =  'index.html';
var text = new Buffer(30);
//text = fs.readFile('index.html', 'utf-8', function read(err, data) {
text = fs.readFileSync('index.html');
//console.log('---' + text);
response.send(text.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
