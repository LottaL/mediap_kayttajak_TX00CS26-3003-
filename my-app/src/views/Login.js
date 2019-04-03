import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register, checkIfUserExists} from '../utils/MediaAPI.js';

class Login extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    full_name: '',
    user_id: '',
    token: ''
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    //console.log(value, name);

    this.setState({
      [name]: value,
    });
  };

  ifLogged = () => {
    let token = localStorage.getItem("token"),
    id = localStorage.getItem("id");
    if (token != null) {
      console.log(token);
      console.log(id);
      this.props.history.push("/home");
    }
  };

  submitLogin = (event) => {
    console.log('submit');
    event.preventDefault();
    login(this.state.username, this.state.password)
    .then(res => {
      console.log(res);
      this.setState({user_id: res.data.user.user_id, token: res.data.token});
      const saveToken = (key, value) => localStorage.setItem(key, value);
      localStorage.clear();
      saveToken("token", res.data.token);
      saveToken("id", JSON.stringify(res.data.user.user_id));
      //console.log(res.data.user.user_id);
      //let token = localStorage.getItem("token");
      //console.log(token);
      this.props.history.push("/home");
    })
    .catch(err => alert(err.response.statusText));
  };

  submitRegister = (event) => {
    console.log('register');
    event.preventDefault();
    checkIfUserExists(this.state.username).then(res => {
      console.log(res);
      if (res.data.available) {
        register(this.state)
        .then(res => {
          console.log(res);
          alert('User registration succeeded: ' + this.state.username);
        })
        .catch(err => {
          console.log(err.response.data);
          alert('User regisstration failed! \n' + err.response.data.error);
        });
      } else {
        alert('Username alredy taken!');
      }
    });
  };

  render() {
    //this.ifLogged();
    return (
        <div>
          <form id="login" onSubmit={this.submitLogin}>
            <h3>Login</h3><br/>
            Username:<br/>
            <input type="text" name="username" value={this.state.username}
                   onChange={this.handleInputChange}/><br/>
            Password:<br/>
            <input type="text" name="password" value={this.state.password}
                   onChange={this.handleInputChange}/><br/>
            <input type="submit" value="Submit"/>
          </form>

          <form id="register" onSubmit={this.submitRegister}>
            <h3>Register</h3><br/>
            Username:<br/>
            <input type="text" name="username" value={this.state.username}
                   onChange={this.handleInputChange}/><br/>
            Password:<br/>
            <input type="text" name="password" value={this.state.password}
                   onChange={this.handleInputChange}/><br/>
            E-mail:<br/>
            <input type="text" name="email" value={this.state.email}
                   onChange={this.handleInputChange}/><br/>
            Full name:<br/>
            <input type="text" name="full_name" value={this.state.full_name}
                   onChange={this.handleInputChange}/><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    )
  }
}

export default Login