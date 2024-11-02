const http = require('http');
const fs = require('fs');

const HOST_NAME = 'localhost';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html');
    console.log(req.url, req.method);
   switch(req.url) {
    case '/':
    case '/index.html':
    case '/index':        
        fs.readFile('index.html', (err, data)=>{
            if(err) {
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Server Found'
                }));
            } else {
                res.writeHead(200);
                res.end(data);
            }
        })
        break;
    default:
        fs.readFile('404.html', (err, data)=>{
            if(err){
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(404);
                res.end(data);
            }
        })

   }
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`server connected on http://${HOST_NAME}:${PORT}`);
})