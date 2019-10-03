import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <p>Informe seus dados para acessar: </p>
          <form>
            
              <label for="exampleInputNome1">Nome</label>
              <input 
                type="text" 
                id="exampleInputNome1" 
                placeholder="Nome" />
      
              <label for="exampleInputEmail1">Email</label>
              <input 
                type="email"  
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Email" />
           
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    )
  }
}