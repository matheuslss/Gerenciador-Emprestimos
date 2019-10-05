import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function Menu(props) {
  console.log('props', props)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-end">
        <a className="navbar-brand" href="#">
          <i className="fa fa-calendar-check-o"> App Empréstimos</i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            { props.user ?
            <React.Fragment>
              <li className="nav-tem disable">
                <a className="nav-link ">{props.user.email}</a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/listarEmprestimos">Empréstimos</Link>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" 
              onClick={ () => { 
                props.setUser(null); 
                props.history.push('/');
              }}>Encerrar sessão</a>
              </li>
            </React.Fragment>
            :
            <li className="nav-item active">
              <Link className="nav-link" to="/">Login <span className="sr-only">(Página atual)</span></Link>
            </li>
            
            }
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Menu);