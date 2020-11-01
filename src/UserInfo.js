import React from 'react';

export class UserInfo extends React.Component {
    constructor(props) {
        super();
        this.userName = props.userName;
    }

    
    componentDidMount() {
        fetch("/api/user/" + this.userName)
          .then(res => res.json())
          .then(json => {
            this.setState({
                userList : json
            });
          });
      }

      
}