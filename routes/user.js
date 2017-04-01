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

router.post('/save-attempt-w', function (req, res) {
  let body = req.body;
  let h = false;

  user = User.findOne({
    id: body.userId
  }, function(err, user) {
    if (err) res.send(err);
    if (user) {
      for (let i = 0; i < user.attempts.length; i++) {
        let attempt = user.attempts[i]

        if (attempt.skill === 'writing' && attempt.test_id == body.testId) {
          attempt.task1 = body.task1;
          attempt.task2 = body.task2;
          findOneAndUpdate(user);
          res.send('POST user/save-attempt-w');
          h = true;
          break;
        }
      }

      if (!h) {
        let data = {
          test_id: body.testId,
          skill: body.skill,
          task1: body.task1,
          task2: body.task2
        }
        user.attempts.push(data);
        findOneAndUpdate(user);
        res.send('POST user/save-attempt-w');
      }
    }
  });
});

module.exports = router;
