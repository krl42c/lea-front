import React from 'react';
import swal from 'sweetalert';
export class Paquetes extends React.Component {
    constructor(props) {
        super();
        this.state = {
            package: null,
            locked: false
        }
        this.checkLocked();
    }

	installPackage(package_name) {
	    this.checkLocked();
	    if(!this.state.locked) {
            fetch("/api/package/install", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: package_name
                    })
            });
        }
	}


    checkLocked() {
        fetch("/api/package/status")
      .then(res => res.json())
      .then(json => {
        this.setState({
            locked : (json.Status == "Free" ? false : true )
        })
      });
    }



    uninstallPackage(package_name) {
            fetch("/api/package/delete", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: package_name
                })
            })

    }

    mostrarAlerta(){
      swal({
        title: "Aviso",
        text: "El gestor de paquetes está ocupado",
        icon: "warning",
      })
    }
    mostrarAlerta2(s){
      swal({
        title: "Aviso",
        text: "¿Estas seguro que quieres eliminar este Paquete?",
        icon: "warning",
        buttons:["No","Si"]
      }).then(respuesta=>{
        if(respuesta){
          {this.uninstallPackage({s})}
          swal({text:"Paquete eliminado con exito",
        icon:"success"})
        }
      })
    }
    render() {
        return(
          <div>
              <form data-aos="fade-up-left" data-aos-duration="800" class="m-4 p-3 border border-primary rounded text-white">
              <div class="form-group p-3">
                  <label>Nombre del Paquete</label>
                  <input required class="form-control" placeholder="Firefox" id="nombre_paquete" name="nombre_paquete" onChange={event => this.setState({package: event.target.value})}/>
              </div>
                  <br />
                <button  type='button' class="btn btn-primary ml-3 mr-3 mb-3" onClick={(event) => {this.installPackage(this.state.package)}}>Instalar</button>
                <button type="button" class="btn btn-danger mb-3" onClick={(event) => {this.mostrarAlerta2(this.state.package)}}>Desinstalar</button>
              </form>


            {
              this.state.locked?

              this.mostrarAlerta()

              :

              <div></div>
            }
          </div>

        )

    }


}
