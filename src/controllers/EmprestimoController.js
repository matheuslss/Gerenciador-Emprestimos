const Emprestimo = require('../models/Emprestimo');

module.exports = {
  async store(req, res) {
  
      // console.log(req.body);

      const {items, dataEmprestimo, dataPrevisaoDev, dataDevolucao, contato, telefone} = req.body;
      const {user_id} = req.headers;

      const emprestimo = await Emprestimo.create({
        user: user_id,
        items: items.split(',').map(item => item.trim()),
        dataEmprestimo,
        dataPrevisaoDev,
        dataDevolucao,
        contato,
        telefone
      })

      return res.json(emprestimo);
    }
};