var express = require('express');
var router = express.Router();
var dao = require('../modules/location-dao');

// Home page route.
router.post('/', function (req, res) {
    console.log(req.body);
    let center = {lat:req.body.lat,lng:req.body.lng};
    dao.save(center);
    req.app.locals.wss.send(JSON.stringify(center));
    res.send('Geolocation sent.');
})
router.get('/', async function(req,res){
    // read latest saved location
    try{
        let gpsLocation = await dao.readLatest();
        console.log(gpsLocation);
        // return map to render
        
        res.render('map.ejs',{gpsLocation});
    } catch(err){
        console.log(err);
        res.render('index.ejs',{msg:"No latest location tracked"});
    }
})
module.exports = router;