var express = require('express');
let usersController= require('../controllers/usersController')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/registro', usersController.signupView)
router.post('/registro', usersController.signup)
module.exports = router;
