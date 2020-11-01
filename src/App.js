import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Users } from './Users';
import { Heading } from './Heading';
import { Process } from './Process';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { CreateUser } from './CreateUser';

function App() {
    var isVisible = false;
    return(
      <Router>
     <div >
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white rounded">
                    <h3 class="ml-1 mr-2">Linux Easy Admin</h3>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link"> Inicio </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/users" class="nav-link"> Usuarios </Link>
                    </li>
                    <li class="nav-tem">
                      <Link to="/process" class="nav-link">Procesos</Link>
                    </li>
                    <li class="nav-tem">
                      <Link to="/create_user" class="nav-link"> Crear usuari</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
            <Route path="/users" component={Users} />
            <Route path="/process" component={Process} />
            <Route path="/create_user" component={CreateUser} />
      </div>
      </Router>
    )
}

export default App;
