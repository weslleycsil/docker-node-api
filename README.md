# docker-node-api
Curso de como "Dockerizar" Uma API feita com Nodejs e MongoDB

Slides -> https://goo.gl/bypuYC
Questionário sobre o Curso -> https://goo.gl/NdDsXy
Sorteio -> http://108.61.81.83:9001/participantes

docker build -t weslleycsil/docker-node-api .
docker login
docker push weslleycsil/docker-node-api


command -> docker swarm init
command deploy stack service - > docker stack deploy -c app-principal.yml app-principal

#Instalando Docker

```
Para fazer a execução do script acima basta executar:

wget -O - https://raw.githubusercontent.com/weslleycsil/440815560b17237ca1f7240ded81ae76/raw/install_docker.sh | bash

Caso queira executar o docker sem utilizar o comando sudo, adicione seu usuário ao grupo docker:

sudo usermod -aG docker nome-usuario

```


#Inscrição
curl --request POST \
  --url http://108.61.81.83:9001/participantes/ \
  --header 'Cache-Control: no-cache' \
  --header 'Content-Type: application/json' \
  --data '{"codigo":"12345","nome":"Weslley","email":"weslleycsil@gmail.com"}'

#primeiro programa com nodejs

```
var http = require('http'), host = '127.0.0.1', port = '9000';
 
var server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
res.end("Olá mundo! Experimentando Node.js</h1>");
})
.listen(port, host, function() {
console.log('Servidor rodando em http://' + host + ':' + port);
});
```
