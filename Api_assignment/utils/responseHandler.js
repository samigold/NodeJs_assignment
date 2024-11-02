function sendResponse(res, statusCode, message, data = null){
    res.writeHead(statusCode, {'COntent-Type': 'application/json'});
    res.end(JSON.stringify({ status: statusCode, message, data}));
}

module.exports = { sendResponse };