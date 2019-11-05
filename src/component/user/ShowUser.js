  import React, { Component } from 'react';
  // import ApiService from '../service/ApiService';
  import { withRouter } from 'react-router-dom';

  class EditUser extends Component {

    constructor(props) {
      super(props)
      this.state = {
        users: []
      }
    }

    render() {
      return (
        <div>
          <h3>EDIT USERS</h3>
          <hr/>
          <form>
         hehehe
          </form>
        </div>
      )
    }
  }

  export default withRouter(EditUser);



