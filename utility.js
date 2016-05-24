
// Create location
exports.chooseLocation = function() {
  // Future: Attach an API to generate locations
  var locations = ['Local Edition', 'Hack Reactor', 'Westfield Mall'];
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
