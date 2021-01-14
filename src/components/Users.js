import React from 'react';
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

    render() {
        return(
            //<div> {this.state.userList.map(s => (<li>{s}</li>))} </div>
            <div>

                <form class="form-inline my-2 my-lg-0">
                    <Link data-aos="fade-right" data-aos-duration="500" to="/create_user" class="btn btn-primary m-3" role="button"> Crear usuario </Link>
                </form>
            <ul class="list-group list-group-flush">

                   { this.state.userList.map(s => (  <li class="list-group-item bg-dark text-white"> {s}</li>))}
            </ul>
            </div>
        )

    }

}
