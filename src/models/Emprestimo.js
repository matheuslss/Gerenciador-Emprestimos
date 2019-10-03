const mongoose = require('mongoose');

const EmprestimoSchema = new mongoose.Schema({
  item: [String],
  dataEmprestimo: Date,
  dataPrevisaoDev: Date,
  dataDevolucao: Date,
  contato: String,
  telefone: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Emprestimo', EmprestimoSchema);