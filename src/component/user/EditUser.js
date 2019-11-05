  import React, { Component } from 'react';
  import ApiService from '../service/ApiService';
  import { withRouter } from 'react-router-dom';

  class EditUser extends Component {

    constructor(props) {
      super(props)
      this.state = {
        id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        los: ""
      }
      this.loadUser = this.loadUser.bind(this);
      this.saveUser = this.saveUser.bind(this);
    }
    
    componentDidMount() {
      this.loadUser();
    }

    loadUser() {
      ApiService.fetchUserById(window.localStorage.getItem("userId")) 
      .then((res) => { 
        let user = res.data[0];
        this.setState({
          id: user.id,
          first_name: user.first_name,
          middle_name: user.middle_name,
          last_name: user.last_name,
          email: user.email,
          los: user.los
        })
      });
    }

    saveUser = (e) => {
      e.preventDefault();
      const user = {
        id: this.state.id,
        first_name: this.state.first_name,  
        middle_name: this.state.middle_name,
        last_name: this.state.last_name,
        email: this.state.email,
        los: this.state.los
      };

      ApiService.editUser(user)
        .then(res => {
          this.props.history.push('/list');
          console.log(user.id)
        });
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    render() {
      return (
        <div>
          <h3>EDIT USERS</h3>
          <hr/>
          <form>
            <input type="text" className="form-control" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.onChange}/><br/>
            <input type="text" className="form-control" placeholder="Middle Name" name="middle_name" value={this.state.middle_name} onChange={this.onChange}/><br/>
            <input type="text" className="form-control" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.onChange}/><br/>
            <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}/><br/>
            <input type="text" className="form-control" placeholder="LOS" name="los" value={this.state.los} onChange={this.onChange}/><br/>
            <button className="bnt btn-success" onClick={this.saveUser}>Save</button>
          </form>
        </div>
      )
    }
  }

  export default withRouter(EditUser);



