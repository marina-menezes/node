const http = require('http');
const { hostname } = require('os');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${host}:${port}/`)
})