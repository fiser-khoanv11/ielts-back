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
    picture: Object,
    attempts: Array
    // time: { type: Date, default: Date.now }
}, { collection: 'users' });
var User = mongoose.model('User', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

findOneAndUpdate = function(user) {
  User.findOneAndUpdate({
    id: user.id
  }, user, {
    upsert: true
  }, function(err, user) {
    if (err) return err;
    else return 'Done findOnendUpdate';
  });
}

router.get('/find-one/:userId', function (req, res) {
  User.findOne({
    id: parseInt(req.params.userId)
  }, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

router.post('/save', function (req, res) {
  findOneAndUpdate(req.body);
  res.send('POST user/save');
});

router.post('/save-attempt', function (req, res) {
  let body = req.body;

  user = User.findOne({
    id: body.userId
  }, function(err, user) {
    if (err) res.send(err);
    if (user) {
      let data = {
        test_id: body.testId,
        skill: body.skill,
        score: body.score
      }
      user.attempts.push(data);
      findOneAndUpdate(user);
    }
  });

  res.send('POST user/save-attempt');  
});

module.exports = router;
