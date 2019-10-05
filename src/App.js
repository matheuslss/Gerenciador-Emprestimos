import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import './App.css';

import LoginForm from './components/LoginForm/LoginForm';
import NovoEmprestimo from './components/NovoEmprestimo/NovoEmprestimo';
import ListarEmprestimos from './components/ListarEmprestimos/ListarEmprestimos';
import Menu from './components/Menu/Menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: null
    };
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount(){
    this.carregaUsuario();
  }

  setUser(novoUsuario) {
    console.log('usuario', novoUsuario);
    this.setState({
      usuario: novoUsuario
    });
    if(novoUsuario){
      localStorage.setItem('user', JSON.stringify(novoUsuario));
    } else {
      localStorage.removeItem('user');
    }
  }

  carregaUsuario(){
    const usuario = localStorage.getItem('user');
    if(usuario){
      this.setState({
        usuario: JSON.parse(usuario),
      });
    }
  }

  render() {
    return (
      <div className="App">    
        <BrowserRouter>
          <Menu user={this.state.usuario} setUser={this.setUser}/>
          <Switch>
            {!this.state.usuario ?
            <React.Fragment>
            <Route path='/' exact component={(props) => <LoginForm setUser={this.setUser} {...props} /> } />
            <Redirect to="/" exact />
            </React.Fragment>
            :             
            <React.Fragment>
              <Route path='/listarEmprestimos' component={(props) => <ListarEmprestimos user={this.state.usuario}{...props} /> } />
              <Route path='/novoEmprestimo' component={(props) => <NovoEmprestimo user={this.state.usuario}{...props} />}/>  
            </React.Fragment>
            }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


