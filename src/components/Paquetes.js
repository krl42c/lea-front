import React from 'react';

export class Paquetes extends React.Component {
    render() {
        return(
          <div>
              <form data-aos="fade-up-left" data-aos-duration="800" class="m-4 p-3 border border-primary rounded text-white">
              <div class="form-group p-3">
                  <label>Nombre del Paquete</label>
                  <input class="form-control" placeholder="Firefox" id="nombre_paquete" name="nombre_paquete" onChange={event => this.setState({username: event.target.value})}/>
              </div>
                  <br />
                <button onClick="" type="submit" class="btn btn-primary ml-3 mr-3 mb-3">Instalar</button>
                <button onClick="" type="submit" class="btn btn-danger mb-3">Desinstalar</button>
              </form>
          </div>
        )

    }


}
