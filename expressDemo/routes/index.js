var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' })
  next()
});

// 注册页面
router.get('/register', function(req, res, next) {
  res.render('login/register');
  next()
});

// 权限页面
router.get('/auth', function(req, res, next) {
  res.render('auth/index');
  next()
});
module.exports = router;
