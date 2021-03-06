var express = require('express');
var router = express.Router();
var path=require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  let main=path.join(__dirname,"/../public/html/index.html");
  res.sendFile(main);
  
});
router.get('/login', function(req, res, next) {
  let login=path.join(__dirname,"/../public/html/login.html");
  res.sendFile(login);
  
});
router.get('/register', function(req, res, next) {
  let login=path.join(__dirname,"/../public/html/register.html");
  res.sendFile(login);
  
});
router.get('/personaldetails', function(req, res, next) {
  let personaldetails=path.join(__dirname,"/../public/html/personal-details.html");
  res.sendFile(personaldetails);
});
router.get('/bodymass', function(req, res, next) {
  let bodymass=path.join(__dirname,"/../public/html/body-mass.html");
  res.sendFile(bodymass);
});
router.get('/main', function(req, res, next) {
  let k=path.join(__dirname,"/../public/html/main.html");
  res.sendFile(k);
});
router.get('/hn', function(req, res, next) {
  let hn=path.join(__dirname,"/../public/html/hn.html");
  res.sendFile(hn);
});
router.get('/hv', function(req, res, next) {
  let hv=path.join(__dirname,"/../public/html/hv.html");
  res.sendFile(hv);
});

router.get('/on', function(req, res, next) {
  let on=path.join(__dirname,"/../public/html/on.html");
  res.sendFile(on);
});
router.get('/chat', function(req, res, next) {
  let chat=path.join(__dirname,"/../public/html/chat.html");
  res.sendFile(chat);
});

router.get('/ov', function(req, res, next) {
  let ov=path.join(__dirname,"/../public/html/ov.html");
  res.sendFile(ov);
});
router.get('/un', function(req, res, next) {
  let un=path.join(__dirname,"/../public/html/un.html");
  res.sendFile(un);
});

router.get('/uv', function(req, res, next) {
  let uv=path.join(__dirname,"/../public/html/uv.html");
  res.sendFile(uv);
});

router.get('/blog', function(req, res, next) {
  let blog=path.join(__dirname,"/../public/html/blog.html");
  res.sendFile(blog);
});
module.exports = router;
