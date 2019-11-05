import React, { Component } from 'react'
import ApiService from '../service/ApiService';
import { withRouter } from 'react-router-dom';

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          first_name: "",
          middle_name: "",
          last_name: "",
          email: "",
          los: 1,
          message: null
        }
      ],
    }
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      email: this.state.email,
      los: this.state.los
    };
    
    ApiService.addUser(user)
      .then(res => {
          this.props.history.push('/list');
          console.log(res.data.result)
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    return (
      <div>
        <h1>ADD USERS</h1>
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

export default withRouter(AddUser);
