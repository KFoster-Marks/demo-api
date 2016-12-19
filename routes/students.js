'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('getting our students');
});

router.post('/', function (req, res) {
  res.send('Hello students!');
});

router.patch('/', function(req, res) {
  res.send('patch request');
});

router.delete('/', function(req, res) {
  res.send('delete request');
});

module.exports = router;
