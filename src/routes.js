const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//req.query acessa os query params (filtrar)
//req.params acessa os route params (editar, deletar)
//req.body acessa o corpo da requisição (criar e editar)

routes.post('/sessions', SessionController.store);

module.exports = routes;