import React from 'react';
import { Users } from './Users';
import { Process } from './Process';
import { CreateUser } from './CreateUser';
import { Ram } from './Ram';
import { Home } from './Home';
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
import PageNotFound from './PageNotFound';
export class Heading extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
          <Router>
         <div>
                <div className='div-barra-busqueda'>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3 bg-dark rounded">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/Home" class="nav-link"> Inicio </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/users" class="nav-link"> Usuarios </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/process" class="nav-link">Procesos</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/create_user" class="nav-link"> Crear usuario</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>

            		<Route path="/">
            			<Redirect to="/Home"/>
            		</Route>
                <Switch>
              		<Route path="/Home" component={Home} />
                  <Route path="/users" component={Users} />
                  <Route path="/process" component={Process} />
                  <Route path="/create_user" component={CreateUser} />
                  <Route component={PageNotFound}/>
                </Switch>
          </div>
          </Router>
        )
    }
}
