var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
	var uname="nandita";
	var pass="nanditak";
	console.log(req.body.uname);
	console.log(req.body.pwd);
	if(uname==req.body.uname&&pass==req.body.pwd)
	{
       res.send('login successfull');
	}
  else
  {
  	res.send("Error in login!!")
  }
});

module.exports = router;
