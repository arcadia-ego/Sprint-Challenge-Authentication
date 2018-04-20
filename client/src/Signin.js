import React from "react";
import axios from "axios";

class Signin extends React.Component {
  state = {
    username: "placeholder",
    password: ""
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="form">
        <div className="form-row">
          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <div className="form-row">
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
            type="password"
          />
        </div>
        <div className="form-row">
          <button>Sign in</button>
        </div>
      </form>
    );
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(response => {
        console.log("response", response.data.token);
        this.props.onSignin({token: response.data.token, user: this.state.username});
        // this.props.history.push("/users");
      })
      .catch(err => {
        console.log("ERROR BOYS!!!", err);
      });
  };
}
export default Signin;