import React, { Component, Fragment } from 'react';
import { Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: null
  };

  render() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jokes</h1>
        </header>
        <ul>
          {this.state.users.map(user => {
            return <li key={user._id}> {user.username} </li>;
          })}
        </ul>
      </div>
      </Fragment>
    );
  }
}

export default App;
