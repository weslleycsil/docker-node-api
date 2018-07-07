//configurações
var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");

var config          = require ('./config/config');
var cors            = require('cors');

var corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    optionsSuccessStatus: 204
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

var participantesRota = require('./rotas/participantes')
var principalRota = require('./rotas/principal');

app.use('/', principalRota);
app.use('/participantes', participantesRota);

var server = app.listen(config.service.port, function () {
    console.log('APP rodando na porta: ', server.address().port);
    require('./config/db');
});