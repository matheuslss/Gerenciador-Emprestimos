const Emprestimo = require('../models/Emprestimo');
const User = require('../models/User');

module.exports = {

  async index(req, res){

    const {user_id} = req.headers;

    const emprestimos = await Emprestimo.find({ user: user_id });
    

    return res.json(emprestimos);
  },

  async store(req, res) {

      const {items, dataEmprestimo, dataPrevisaoDev, dataDevolucao, contato, telefone} = req.body;
      const {user_id} = req.headers;

      const user = await User.findById(user_id);

      if(!user){
        return res.status(400).json({
          error: "Usuário inexistente"
        })
      }

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