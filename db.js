
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

var db = mongoose.connection;
var ScoreModel;

db.on('error', function(e) {
    console.error('connection error:', e);
});
db.once('open', function(callback) {
   var Schema = mongoose.Schema;
   var scoreSchema = new Schema({ name: String, score: Number });
   ScoreModel = mongoose.model('Score', scoreSchema);
   app.listen(8080);
});

