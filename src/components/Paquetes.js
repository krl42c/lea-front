import React from 'react';

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
		return function() {
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
    }

    render() {
        return(
          <div>
              <form data-aos="fade-up-left" data-aos-duration="800" class="m-4 p-3 border border-primary rounded text-white">
              <div class="form-group p-3">
                  <label>Nombre del Paquete</label>
                  <input class="form-control" placeholder="Firefox" id="nombre_paquete" name="nombre_paquete" onChange={event => this.setState({package: event.target.value})}/>
              </div>
                  <br />
                <button  type='button' class="btn btn-primary ml-3 mr-3 mb-3" onClick={(event) => {this.installPackage(this.state.package)}}>Instalar</button>
                <button type="submit" class="btn btn-danger mb-3" onClick={this.uninstallPackage(this.state.package)}>Desinstalar</button>
              </form>


            {
              this.state.locked?

              <h2> El gestor de paquetes está ocupado </h2>

              :

              <div></div>
            }
          </div>

        )

    }


}
