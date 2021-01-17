import React from 'react';
import swal from 'sweetalert';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export class Users extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userList : []
        };

    }

    componentDidMount() {
        fetch("/api/users")
          .then(res => res.json())
          .then(json => {
            this.setState({
                userList : json
            });
          });
      }

	deleteUser(userName) {
            fetch("/api/delete_user", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username : userName
                    })
            });
	}
mostrarAlerta(s){
  swal({
    title: "Aviso",
    text: "¿Estas seguro que quieres eliminar este Usuario?",
    icon: "warning",
    buttons:["No","Si"]
  }).then(respuesta=>{
    if(respuesta){
      this.deleteUser({s})
      swal({text:"Usuario borrado con exito",
    icon:"success"})
    }
  })
}
    render() {
        return(
            //<div> {this.state.userList.map(s => (<li>{s}</li>))} </div>
            <div className="div-listas">

                <form class="form-inline my-2 my-lg-0">
                    <Link data-aos="fade-right" data-aos-duration="500" to="/create_user" class="btn btn-primary m-3" role="button"> Crear usuario </Link>
                </form>
            <ul class="list-group list-group-flush">

                   { this.state.userList.map(s => (  <li class="fondo list-group-item text-white"> {s}

                   <button class="btn btn-danger ml-2" href="" onClick={(event) => {this.mostrarAlerta({s})}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                   </svg>
                   </button>
                   </li>))}
            </ul>
            </div>
        )

    }

}
