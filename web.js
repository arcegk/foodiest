console.log("entrando al web.js");
var gzippo = require('gzippo');
var express = require('express');
console.log("entrando a morgan");
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);