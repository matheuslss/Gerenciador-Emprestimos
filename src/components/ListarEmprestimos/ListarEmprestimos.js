import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './ListarEmprestimos.css';

import { formatarData, formatDate } from '../../functions';


export default function ListarEmprestimos(props) {
  const [emprestimos, setEmprestimos] = useState([]);

  async function marcarDevolvido(emprestimo_id) {

    const dataDevolucao = new Date();

    const response = await api.put('/emprestimos', { 
      _id: emprestimo_id,
      dataDevolucao: dataDevolucao ? `${formatDate(dataDevolucao)}T00:00:00-0300`: null,
    });
    carregarEmprestimos();
  };

  async function deletarEmprestimo(emprestimo_id) {
    console.log(emprestimo_id);
    const response = await api.delete('/emprestimos/'+emprestimo_id, {
    });
    setTimeout(() => {
      carregarEmprestimos();
    }, 100);
  }

  async function carregarEmprestimos() {
    const user_id = props.user._id;
    const response = await api.get('/emprestimos', {
      headers: { user_id }
    });

    setEmprestimos(response.data);

    // console.log(response.data);
  }

  useEffect( () => {
    carregarEmprestimos();
  }, 
  [] // o array vazio indica que a funcao useEffect sera executada apenas uma vez
  )

  return (
    <div className="content">
    <p>Lista de empréstimos</p>
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Data do empréstimo</th>
            <th scope="col">Data prevista para devolução</th>
            <th scope="col">Contato</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data da devolução</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
        
        {emprestimos.map( emprestimo => {
        
        const dataDevolucao = emprestimo.dataDevolucao && new Date(emprestimo.dataDevolucao.split('T')[0]);
        
        const dataEmprestimo = emprestimo.dataEmprestimo && new Date(emprestimo.dataEmprestimo.split('T')[0]);
        
        const dataPrevisaoDev = emprestimo.dataPrevisaoDev && new Date(emprestimo.dataPrevisaoDev.split('T')[0]);
        

        const temAtraso = !dataDevolucao && dataPrevisaoDev && dataPrevisaoDev < new Date();
        // console.log('Atraso?', temAtraso);
        
        return (
          <tr key={ emprestimo._id } className={ temAtraso ? 'table-danger': (dataDevolucao ? 'table-success' : '') }>
            <td>{ emprestimo.items.join(', ') }</td>
            <td>{ formatarData(emprestimo.dataEmprestimo) }</td>
            <td>{ formatarData(emprestimo.dataPrevisaoDev) }</td>
            <td>{ emprestimo.contato }</td>
            <td>{ emprestimo.telefone }</td>
            <td>{ formatarData(emprestimo.dataDevolucao) }</td>
            <td>
              { !dataDevolucao ?
              <button className="btn btn-success" onClick={ () => marcarDevolvido(emprestimo._id)}>
                <i className="fa fa-check"></i>
              </button>
              : null
              }
              <button className="btn btn-danger margin-left" onClick={ () => deletarEmprestimo(emprestimo._id)}>
                <i className="fa fa-trash btn-check"></i>
              </button>
            </td>
          </tr>
        )})}
       </tbody>
      </table>
    </div>
    <Link to="/novoEmprestimo">
      <button className="btn-cadastro">Cadastrar novo empréstimo</button>
    </Link>
    </div>
  )
}