/**
 * Module dependencies.
 */
var express     = require('express');
var fs          = require('fs');
const path = require('path');
const routes = require('./config/routes');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations

var env             = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config          = require('./config/config');
var db              = require('./config/sequelize');
var passport        = require('./config/passport');

var app = express();
app.use('/',express.static(path.join(__dirname, './public')));
app.use('/docs',express.static(path.join(__dirname, './apidoc')));

//Initialize Express
require('./config/express')(app, passport);



//Initialize Routes
routes.init(app);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;
