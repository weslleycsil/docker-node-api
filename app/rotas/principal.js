var config          = require ('../config/config');

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send('Seja bem Vindo ao Curso de Dockerizando uma API NodeJS :)');
});

module.exports = router;