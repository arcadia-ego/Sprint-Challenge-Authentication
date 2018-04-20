import React, { Component, Fragment } from 'react';
import { Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signin from "./Signin";

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
        {this.state.users && (
            <h1 className="App-title">
              Welcome {this.state.users}!
            </h1>
          )}
      </div>
      <Route
          to="/signin"
          render={props => <Signin onSignin={this.signInSuccess} />}
        />
      </Fragment>
    );
  }

signInSuccess = data => {
  this.setState({users: data.user});
  localStorage.setItem("authtoken", data.token);
  console.log(this.state);
}

}

export default App;
