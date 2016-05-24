
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function(e) {
    console.error('connection error:', e);
});

var Schema = mongoose.Schema;
var meetingSchema = new Schema({ 
  name: String,
  phoneNumber: String,
  location: String,
  date: String,
  time: String,
  shortDescription: String,
  description: String
});


var connection = mongoose.connect('mongodb://localhost:27017/');

var Meeting = connection.model('Meeting', meetingSchema);

exports.Meeting = Meeting;
