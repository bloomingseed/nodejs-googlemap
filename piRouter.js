var express = require('express');
var router = express.Router();

// Home page route.
router.post('/', function (req, res) {
    console.log(req.body)
    res.send('Geolocation sent.');
})
router.get('/', function(req,res){
    console.log(req.param)
    res.send('Specify lattitude and longitude!')
})


module.exports = router;