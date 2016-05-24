// Dependenciesz
var http = require('http');
var express = require('express');
var readline = require('readline');
var bodyParser = require('body-parser')
// var bluebird = require('bluebird');
var morgan = require('morgan');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var path = require('path');
var db = require('./db.js');
var util = require('./utility.js');


var app = express();
// app.use(function(req,res, next) {
//   req.headers['if-none-match'] = 'no-match-for-this';
//   next();
// });

// app.disable('etag');


var publicAsset = __dirname + '/public';

app.use(morgan('dev')); // log requests to the console output
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded request into req.body
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(__dirname + '/public/favicon.ico')); // serve the tab icon the browser display for your page
// app.use(express.static('public')); // serve public/</i> as a static resource (just returns the file, images, scripts)
// app.use(methodOverride()); // simulate DELETE and PUT calls if the client is using X-HTTP-Method-Override
// app.use(cookieParser()); // parse <code>req.headers.cookie</code> into <code>req.cookies</code>
// app.use(session({ secret: 'your secret here' })); // make a user session available in <code>req.session</code> (only creates a cookie with an id client side)


app.get('/meeting', function(req, res) {
  // res.send('hello world');
  console.log('Got get request!');
  db.Meeting.find({}, function(err, meetings) {
    if (err) {
      return console.error(err);
    }
    // console.log('File from database!', meetings);
    res.status(200).json(meetings);
  })
  
});

app.post('/meeting', function(req, res) {
  var meeting = new db.Meeting({
    name: req.body.name,
    phoneNumber: req.body.phone0 + '-' + req.body.phone1 + '-' + req.body.phone2,
    location: util.chooseLocation(), 
    date: util.chooseDate(), 
    time: util.chooseTime(), 
    shortDescription: req.body.shortDescription,
    description: req.body.description
  })

  meeting.save(function(err, meeting) {
    if (err) {
      console.log(err);
    } 
    console.log('saved successfully', meeting);
    res.status(200).json(meeting);
  })
});

app.listen(1337, function() {
	console.log('Example app listening on port 1337');
})