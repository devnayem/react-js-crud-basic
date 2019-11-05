import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { AddUserComponent, EditUserComponent, ListUserComponent, ShowUserComponent } from '../user/index';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/edit">Edit</Link></li>
          <li><Link to="/show">Show Client</Link></li>
        </ul>

        <Switch>
          <Route path="/list">
            <ListUserComponent />
          </Route>
          <Route path="/add">
            <AddUserComponent />
          </Route>
          <Route path="/edit">
            <EditUserComponent />
          </Route>
          <Route>
            <ShowUserComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default AppRouter;

