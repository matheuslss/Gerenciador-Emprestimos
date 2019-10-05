import React, { useState } from 'react';
import api from '../../services/api';
import './LoginForm.css';

export default function LoginForm (props) {
    const [email, setEmail] = useState('');
    const { history, setUser } = props;
    console.log('Props FormLogin', props);

   async function handleSubmit(event) {
      event.preventDefault();

      const response = await api.post('/sessions', { email });

      setUser(response.data);

      // console.log('setUser', setUser)
      history.push('/listarEmprestimos');
    }

    return (
      <div className="container">
        <div className="content">
          <p>Informe seus dados para acessar: </p>
          <form onSubmit={handleSubmit}> 
      
              <label htmlFor="exampleInputEmail1">Email</label>
              <input 
                type="email"  
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Email"
                value={ email }
                onChange={ event => setEmail( event.target.value ) }
                />
           
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    )
}
