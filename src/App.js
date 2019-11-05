import React, { Component } from 'react';
import './App.css';

import AppRouter from '../src/component/router/RouterComponent';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Users</h1>
        <hr></hr>
        <AppRouter />
      </div>
    )
  }
}

export default App;
