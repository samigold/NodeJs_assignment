const http = require('http');
const url = require('url');
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('./controllers/productController');

const HOST_NAME = 'localhost';
const PORT = 3000;






const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;

    //Parse body of incoming request
    if (method === 'POST' || method === 'PUT') {
        let body = '';
        req.on('data', chunk => (body += chunk.toString()));
        req.on('end', ()=>{
            req.body = JSON.parse(body || '{}');
            routeRequest(path, method, req, res)
        });
    } else {
        routeRequest(path, method, req, res)
    }
})

function routeRequest(path, method, req, res) {
    if (path === '/products' && method === 'POST') return createProduct(req, res);
    if (path === '/products' && method === 'GET') return getProducts(req, res);
    if (path.startsWith('/products/') && method === 'GET') return getProduct(req, res);
    if (path.startsWith('/products/') && method === 'PUT') return updateProduct(req, res);
    if (path.startsWith('/products/') && method === 'DELETE') return deleteProduct(req, res);
}


server.listen(PORT, HOST_NAME, () => {
    console.log(`server connected on http://${HOST_NAME}:${PORT}`);
})