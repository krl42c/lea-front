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
                   { this.state.userList.map(s => (  <li data-aos="fade-right" data-aos-duration="500" class="list-group-item bg-dark text-white"> {s}                         <a href="">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </a>
                    <br/></li>))}
            </ul>
            </div>
        )

    }

}
