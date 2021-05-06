var fs = require('fs');
const dataPath = './locationHistory.data'

function save(center){
    return new Promise((resolve,reject)=>{
        fs.writeFile(dataPath,center.lat+','+center.lng,{encoding:'utf8'},err=>{
            if(err){
                reject(err);
            } else{
                resolve();
            }
        });
    })
}

function readLatest(){
    return new Promise((resolve,reject)=>{
        fs.readFile(dataPath,{encoding:'utf8'},(err,data)=>{
            if(err){
                reject(err);
            } else{
                data = data.split(',');
                resolve({lat:Number.parseFloat(data[0]),
                        lng:Number.parseFloat(data[1])});
            }
        });
    });
    
}
async function saveWrapper({lat,lng}){
    try{
        await save({lat,lng});
    } catch(err){throw err;}
}
async function readWrapper(){
    try{
        return await readLatest();
    } catch(err){throw err;}
}
// try{
//     (async ()=>await saveWrapper({lat:16.06778, lng:108.22083}))();
// } catch(err){
//     console.log(err);
// }
// try{
//     (async ()=>console.log(await readWrapper()))();
// } catch(err){
//     console.log(err);
// }
module.exports = {save:saveWrapper,readLatest:readWrapper};