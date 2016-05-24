var twilio = require('twilio');

// Create location
exports.chooseLocation = function() {
  // Future: Attach an API to generate locations
  var locations = ['Local Edition', 'Hack Reactor', 'Westfield Mall', 'The Flying Falafel', "Golden Gate Park"];
  var randomIndex = Math.floor(Math.random() * locations.length);
  var pickedLocation = locations[randomIndex]
  return pickedLocation;
}

// Create date
exports.chooseDate = function() {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var randomIndex = Math.floor(Math.random() * daysOfWeek.length);
  var pickedDay = daysOfWeek[randomIndex]
  return pickedDay;
}

// Create time
exports.chooseTime = function() {
  var times = ['7:00PM', '8:00PM', '9:00PM', '10:00PM'];
  var randomIndex = Math.floor(Math.random() * times.length);
  var pickedTime = times[randomIndex]
  return pickedTime;
}

// Twilio---------------------------
var accountSid = 'ACcdeeb695e3e1abe1de8b6287f114809c';
var authToken = 'cdf5283c2ea7a733586411e3dc0b0e14';
var client = new twilio.RestClient(accountSid, authToken);

exports.sendMessage = function(phoneNumber, message) {
  client.messages.create({
    body: message,
    to: phoneNumber,
    from: '+14152302336'
  }, function(err, message) {
    console.log(err);
  });
}
