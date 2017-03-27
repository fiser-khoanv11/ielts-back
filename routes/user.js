var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Mongoose
var Schema = mongoose.Schema;
var userSchema = new Schema({
    id: Number,
    first_name: String,
    name: String,
    email: String,
    picture: Object
}, { collection: 'users' });
var User = mongoose.model('User', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save', function (req, res) {
  User.findOneAndUpdate({
    "id": req.body.id
  }, req.body, {
    upsert: true
  }, function(error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.send('Done findOneAndUpdate');
    }
  });
});

module.exports = router;
