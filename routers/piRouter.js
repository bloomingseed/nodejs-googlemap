var express = require('express');
var router = express.Router();
var dao = require('../modules/location-dao');

// Home page route.
router.post('/', function (req, res) {
    console.log(req.body);
    let msg;
    let center = {lat:req.body.lat,lng:req.body.lng};
    if(center.lat&&center.lng){
        dao.save(center);
        if(req.app.locals.wss){
            req.app.locals.wss.send(JSON.stringify(center));
        }
        msg = 'Geolocation sent';
    } else{
        msg = 'Request body must be JSON object containing "lat" and "lng" keys';
    }
    res.send(msg);
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