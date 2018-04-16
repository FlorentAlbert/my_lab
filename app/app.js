var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

// Gestion d'erreurs
var notFound = require('./errors/notFound');

// Routes
var indexRouter = require('./site/index');

var app = express();

// view engine setup
app.set('views', __dirname  );
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Pour le style
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/mdbootstrap', express.static(path.join(__dirname, '..', 'node_modules/mdbootstrap')));

// Routes
app.use('/', indexRouter);
app.use(notFound);

module.exports = app;
