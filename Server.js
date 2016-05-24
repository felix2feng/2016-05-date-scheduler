// Dependenciesz
var http = require('http');
var express = require('express');
var readline = require('readline');
var app = express();
var google = require('googleapis');
var bodyParser = require('body-parser')
var googleAuth = require('google-auth-library');
var bluebird = require('bluebird');
var morgan = require('morgan');

// Google configurations
var publicAsset = __dirname + '/public';

app.use(express.static(publicAsset));
app.use(morgan('combined')); // log requests to the console output
// app.use(favicon(__dirname + '/public/favicon.ico')); // serve the tab icon the browser display for your page
// app.use(express.static('public')); // serve public/</i> as a static resource (just returns the file, images, scripts)
// app.use(methodOverride()); // simulate DELETE and PUT calls if the client is using X-HTTP-Method-Override
// app.use(cookieParser()); // parse <code>req.headers.cookie</code> into <code>req.cookies</code>
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded request into req.body
// app.use(session({ secret: 'your secret here' })); // make a user session available in <code>req.session</code> (only creates a cookie with an id client side)


app.get('/', function(req, res) {
	res.sendFile(publicAsset + '/calendate.html')	
});

app.post('/', function(req, res) {
	// Add that data in a temporary storage
	// Send back a success response
  console.log('This is the request: ', req.body);
	res.status(200).end();
});

app.listen(1337, function() {
	console.log('Example app listening on port 1337');
})