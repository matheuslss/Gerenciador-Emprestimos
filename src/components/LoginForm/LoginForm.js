import React, { useState } from 'react';
import api from '../../services/api';
import './LoginForm.css';

 function LoginForm () {
    const [email, setEmail] = useState('');

   async function handleSubmit(event) {
      event.preventDefault();

      const response = await api.post('/sessions', { email });

      const { _id } = response.data;

      localStorage.setItem('user', _id);
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

export default LoginForm;