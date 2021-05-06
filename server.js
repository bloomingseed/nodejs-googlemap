const express = require('express'); 
const bodyParser = require('body-parser');
const piRouter = require('./routers/piRouter.js')
const indexRouter = require('./routers/index.js')
const WebSocket = require('ws');

const app = express(); 
const expressPort = 8080; 
const websocketPort = 8079;
const socketServer = new WebSocket.Server({port:websocketPort});

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('assets'))

app.use('/',indexRouter);
app.use('/pi',piRouter);


app.listen(expressPort, function(){
    console.log("Your express server is app running on port " + expressPort);
})
socketServer.on('connection',function(ws){
    ws.on('message',function(msg){
        console.log('client sent: ',msg);
    });
    app.locals.wss = ws;
});