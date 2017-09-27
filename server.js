var express = require('express'), app = express(),
    port = process.env.PORT || 8080, mongoose = require('mongoose'),
    Trade =
        require('./api/models/smartWasteModel'), // created model loading here
    bodyParser = require('body-parser');

var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(server);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.status(404).send({url : req.originalUrl + ' not found'})
// });

app.use(express.static(path.join(__dirname, '/public/')));

var messages = [
  {author : "Carlos", text : "Hola! que tal?"},
  {author : "Pepe", text : "Muy bien! y tu??"},
  {author : "Paco", text : "Genial!"}
];

io.on('connection', function(socket) {
  console.log('Un cliente se ha conectado');
  socket.emit('messages', messages);
});

var routes = require('./api/routes/smartWasteRoutes'); // importing route
routes(app);                                           // register the route

app.listen(port);

console.log('smart waste RESTful API server started on: ' + port);
