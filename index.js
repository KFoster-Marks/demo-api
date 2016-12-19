'use strict';

var express = require('express');
var app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = require('./routes/students.js');
app.use('/students', students);

app.listen(3000, function () {
  console.log('What up from port 3000!');
});

module.exports = app;
