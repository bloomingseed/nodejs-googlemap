const socketPort = 8079;
const ws = new WebSocket('ws://localhost:'+socketPort);

ws.onopen = function(){
    console.log('Connected to server socket');
    ws.send('Hi');
    ws.onmessage = function(ev){
        console.log(ev.data);
        let center = JSON.parse(ev.data);
        changeCenter(center.lat,center.lng);
    }
}