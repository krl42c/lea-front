import React from 'react';
import swal from 'sweetalert';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export class Apagar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value : null
        };
    }

    componentDidMount() {
        fetch("/api/shutdown")
          .then(res => res.json())
          .then(json => {
            this.setState({
                Value : json.Value
            });
          });
      }

mostrarAlerta(s){
  swal({
    title: "Aviso",
    text: "¿Estas seguro que quieres apagar el equipo?",
    icon: "warning",
    buttons:["No","Si"]
  }).then(respuesta=>{
    if(respuesta){
      swal({text:"Usuario borrado con exito",
    icon:"success"})
    }
  })
}
    render() {
        return(
          <div>
            <button class="btn btn-danger ml-2" onClick={(event) => {this.componentDidMount()}}>Apagar</button>
          </div>
        )

    }

}
