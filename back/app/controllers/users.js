/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');



/**
 * Create user
 */
exports.create = function (req, res) {
  var message = null;

  var user = db.User.build(req.body);

  user.provider = 'local';
  user.salt = user.makeSalt();
  user.hashedPassword = user.encryptPassword(req.body.password, user.salt);
  console.log('New User (local) : { id: ' + user.id + ' username: ' + user.username + ' }');

  user.save().success(function () {
    res.send(user);
  }).error(function (err) {
    res.status(500).json({
      message: err
    })
  });
};
/**
 * Login
 */
exports.user = function (req, res, next) {
  email = req.body.email;
  password = req.body.password;
  db.User.find({
    where: {
      email: email
    }
  }).success(function (user) {
    if (!user) {
      res.status(500).json({
        message: 'Unknown user'
      });
    } else if (!user.authenticate(password)) {
      res.status(500).json({
        message: 'Invalid Password'
      });
    } else {
      console.log('Login (local) : { id: ' + user.id + ', username: ' + user.username + ' }');
      res.send(user);
    }
  }).error(function (err) {
    res.status(500).json({
      message: err
    });
  });
};