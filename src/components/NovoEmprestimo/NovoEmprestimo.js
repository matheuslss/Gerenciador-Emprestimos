import React, { useState } from 'react';
import api from '../../services/api';
import './NovoEmprestimo.css';

export default function NovoEmprestimo ({ history, user }) {

  const [items, setItems] = useState('');
  const [dataEmprestimo, setDataEmprestimo] = useState('');
  const [dataPrevisaoDev, setDataPrevisaoDev] = useState('');
  const [contato, setContato] = useState('');
  const [telefone, setTelefone] = useState('');

  console.log(items);

  async function handleSubmit(event) {
    event.preventDefault();

    const user_id = user._id;
    const options = {
      headers: {
        'user_id': user_id 
      }
    };

    try{ 
      const response = await api.post('/emprestimos', { 
        items,
        dataEmprestimo: dataEmprestimo ? `${dataEmprestimo}T00:00:00-0300`: null,
        dataPrevisaoDev: dataPrevisaoDev ? `${dataPrevisaoDev}T00:00:00-0300`: null, 
        contato, 
        telefone  
      }, options);

      history.push('/listarEmprestimos');
    } catch (error ){
      const errorData = await error.response.data;
      console.log(errorData.error);
    }
  }


  return (
    <div className="container">
      <div className="content">
        <p>Cadastrar novo empréstimo: </p>
        <form onSubmit={handleSubmit}> 
    
            <label htmlFor="exampleInputItem1">Itens</label>
            <input 
              type="text"  
              id="exampleInputItem1" 
              placeholder="Itens"
              value={ items }
              onChange={ event => setItems( event.target.value ) }
              />

            <label htmlFor="exampleInputDataEmprestimo1">Data do empréstimo</label>
            <input 
              type="date"  
              id="exampleInputDataEmprestimo1" 
              placeholder="Data do emprestimo"
              value={ dataEmprestimo }
              onChange={ event => setDataEmprestimo( event.target.value ) }
              />
          
            <label htmlFor="exampleInputDataPrevisaoDev1">Previsão para devolução</label>
            <input 
              type="date"  
              id="exampleInputDataPrevisaoDev1" 
              placeholder="DataPrevisaoDev"
              value={ dataPrevisaoDev }
              onChange={ event => setDataPrevisaoDev( event.target.value ) }
              />
            <label htmlFor="exampleInputContato1">Contato</label>
            <input 
              type="text"  
              id="exampleInputContato1" 
              placeholder="Contato"
              value={ contato }
              onChange={ event => setContato( event.target.value ) }
              />
            <label htmlFor="exampleInputTelefone1">Telefone</label>
            <input 
              type="text"  
              id="exampleInputTelefone1" 
              placeholder="Telefone"
              value={ telefone }
              onChange={ event => setTelefone( event.target.value ) }
              />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
