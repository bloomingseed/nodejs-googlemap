const express = require('express'); 
const bodyParser = require('body-parser');
const piRouter = require('./piRouter.js')

const app = express(); 
const port = 8080; 
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send("Hello World");
})

app.use('/pi',piRouter);


app.listen(port, function(){
    console.log("Your app running on port " + port);
})