const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://mlss:mlss@cluster0-czbs7.mongodb.net/projeto-emprestimos?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  //os dois comandos acima removem uns avisos chatos
})

app.use(express.json());
app.use(routes);

app.listen(3333);