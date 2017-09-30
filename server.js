var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');
var Trade =
    require('./api/models/smartWasteModel'); // created model loading here
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var path = require('path');

server.listen(80, function() {
  console.log('Servidor corriendo en http://localhost:8080');
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/smartWaste');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

require('./api/routes/smartWasteRoutes')(app);

// app.use(function(req, res) {
//   res.status(404).send({url : req.originalUrl + ' not found'})
// });

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/[^\.]+$', function(req, res, next) {
  if (NOT_ANGULAR_ROUTES) {
    return next();
  }
  res.sendfile("index.html", {root : __dirname + '/public'});
});

// app.listen(port);

console.log('smart waste RESTful API server started on: ' + port);
