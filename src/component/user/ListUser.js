import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import { withRouter } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class ListUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1
    }
    this.reloadUserlist = this.reloadUserList.bind(this);
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList() {
    ApiService.fetchUsers()
      .then(res => {
        this.setState({
          users: res.data.data,
          itemsCountPerPage: res.data.per_page,
          totalItemsCount: res.data.total,
          activePage: res.data.current_page,
          
        })
      })
  }

  addUser() {
    window.localStorage.removeItem("partners");
    this.props.history.push('/add');
  }

  editUser(id) {
    window.localStorage.setItem("userId", id);
    this.props.history.push('/edit');
  }
  
  showUser(id) {
    window.localStorage.setItem("userId", id);
    this.props.history.push('/show');
  }

  deleteUser(id) {
    window.alert('Deleted!')
    // ApiService.deleteUser()
    // ApiService.deleteUser(userId);
    // this.setState({ users: this.state.users.filter(user => user.id !== userId ) });
  }

  handlePageChange(pageNumber) {
    ApiService.paginateUsers(pageNumber)
      .then(res => {
        this.setState({
          users: res.data.data,
          itemsCountPerPage: res.data.per_page,
          totalItemsCount: res.data.total,
          activePage: res.data.current_page
        })
        console.log(res);
      })
  }

  renderUsersList() {
    return this.state.users.map((user, i) => 
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.status}</td>
        <td>
          <button className="btn btn-success" onClick={() => this.editUser(user.id)}>Edit</button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>Delete</button>
        </td>
        <td>
          <button className="btn btn-info" onClick={() => this.showUser()}>View</button>
        </td>
    </tr> 
    )
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary float-right mb-3" onClick={() => this.addUser()}>+ Add New User</button>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsersList()}
          </tbody>
        </table>

        <div className="d-flex justify-content-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={this.pageRangeDisplayed}
            onChange={this.handlePageChange}
            itemClass='page-item'
            linkClass='page-link'
          />
        </div>
      </div>
    )
  }
}

export default withRouter(ListUser);

