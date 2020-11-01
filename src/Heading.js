import React from 'react';

export class Heading extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white rounded">
                    <h3 class="ml-1 mr-2">Linux Easy Admin</h3>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="{{url_for('index')}}">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{url_for('list_users')}}">Usuarios</a>
                    </li>
                    <li class="nav-tem">
                        <button class="nav-link"> Procesos </button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MDLR</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Elige tu luchador
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">El dandy</a>
                        <a class="dropdown-item" href="#">Morad</a>
                        <a class="dropdown-item" href="#">Normal lelele lele</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
