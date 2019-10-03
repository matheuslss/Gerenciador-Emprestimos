const express = require('express');

const routes = express.Router();

//req.query acessa os query params (filtrar)
//req.params acessa os route params (editar, deletar)
//req.body acessa o corpo da requisição (criar e editar)

routes.post('/users', (req, res) => {
  return res.json(req.body); 
});

module.exports = routes;