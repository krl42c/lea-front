import React from 'react';

export class CreateUser extends React.Component {
    constructor(props) {
        super();
    }
   /* saveUser = (user, password) => {
        fetch("/api/create_user", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                auth: password
            })
        })
    }*/

    saveUser(user,password) {
        fetch("/api/create_user", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                auth: password
            })
        })
    }

    render() {
        return(
            <div>
                <form class="m-4 p-3 border border-primary rounded">
                <div class="form-group">
                    <label >Nombre de Usuario</label>
                    <input class="form-control" id="user_name" />
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                    <div>
                    <label>Año de nacimiento: <input type="number" name="nacido" min="1900" max="2005" /></label>
                    </div>
                    <div>
                    <label>Sexo:
                        <input type="radio" name="hm" value="h" /> Hombre
                        <input type="radio" name="hm" value="m" /> Mujer
                    </label>
                    </div>
                        <br />
                <button onClick={this.saveUser("mdlr","mdlr")} type="submit" class="btn btn-primary">Guardar</button>
                </form> 
            </div>
        )
    }
}