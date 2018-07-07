# docker-node-api
Curso de como "Dockerizar" Uma API feita com Nodejs e MongoDB

Slides -> https://goo.gl/bypuYC
Questionário sobre o Curso -> 
Sorteio -> http://108.61.81.83:9001/participantes

docker build -t weslleycsil/docker-node-api .
docker login
docker push weslleycsil/docker-node-api


command -> docker swarm init
command deploy stack service - > docker stack deploy -c app-principal.yml app-principal