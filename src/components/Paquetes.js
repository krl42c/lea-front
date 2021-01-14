import React from 'react';

export class Paquetes extends React.Component {
    constructor(props) {
        super();
        this.state = {
            package: null
        }
    }

    installPackage(package_name) {
		return function() {
            fetch("/api/package/install", {
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
                <button type="submit" class="btn btn-primary ml-3 mr-3 mb-3" onClick={this.installPackage(this.state.package)}>Instalar</button>
                <button onClick="" type="submit" class="btn btn-danger mb-3">Desinstalar</button>
              </form>
          </div>

        )

    }


}
