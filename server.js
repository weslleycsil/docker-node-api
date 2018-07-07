var http = require('http'), host = '127.0.0.1', port = '9000';
 
var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
res.end("<h1>Olá mundo! Experimentando Node.js</h1>");
})
.listen(port, host, function() {
console.log('Servidor rodando em http://' + host + ':' + port);
});