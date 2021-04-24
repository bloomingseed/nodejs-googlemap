var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function(req,res){
    res.render('index.ejs',{msg:undefined})
})


module.exports = router;