const express = require('express'); 
const bodyParser = require('body-parser');
const piRouter = require('./routers/piRouter.js')

const app = express(); 
const port = 8080; 
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('assets'))

app.get('/', function(req, res){
    res.render('index.ejs')
})

app.use('/pi',piRouter);


app.listen(port, function(){
    console.log("Your app running on port " + port);
})