var express = require('express'), app = express(),
    port = process.env.PORT || 8080, mongoose = require('mongoose'),
    Trade =
        require('./api/models/smartWasteModel'), // created model loading here
    bodyParser = require('body-parser');

var http = require('http');
var path = require('path');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.status(404).send({url : req.originalUrl + ' not found'})
// });

app.use(express.static(path.join(__dirname, '/public/')));

var routes = require('./api/routes/smartWasteRoutes'); // importing route
routes(app);                                           // register the route

app.listen(port);

console.log('smart waste RESTful API server started on: ' + port);
