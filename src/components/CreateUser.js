import React from 'react';
import GoBack from './atras';

export class CreateUser extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: null,
            password: null
        }
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
		return function() {
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
    }


    render() {
        return(
            <div data-aos="fade-right">
            <GoBack/>
                <form class="m-4 p-3 border border-primary rounded text-white">
                <div class="form-group">
                    <label >Nombre de Usuario</label>
                    <input class="form-control" id="user_name" name="usuario" pattern="[A-Za-z]{1,50}" onChange={event => this.setState({username: event.target.value})}/>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" class="form-control" id="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$" onChange={event => this.setState({password: event.target.value})}/>
                </div>
                    <br />
                <button onClick={this.saveUser(this.state.username,this.state.password)} type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}
