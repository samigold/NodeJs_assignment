const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../products.json');

//Helper function to read data from products.json

function readData() {
    return new Promise((res, rej) =>{
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                 (rej(err));
                res.writeHead(400)
                res.end('An error occured');
            }
            res(JSON.parse(data || '[]'));
        })
    })
}


//function to write data to products.json
function writeData(data) {
    return new Promise((res, rej)=>{
        fs.writeFile(filepath, JSON.stringify(data, null, 2), (err) =>{
            if(err){
                rej(err);
            }
            res();
        })
    })
}

module.exports = {
    readData,
    writeData
};