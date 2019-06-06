var express = require('express');
var router = express.Router();
const service = require("../service/userService");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',service.login);
router.post('/register',service.register);

module.exports = router;
