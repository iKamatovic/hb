import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser, addNotification } from '../actions/';
import LoginForm from '../components/LoginForm/';
import Notification from '../models/Notification';
import * as userService from '../services/user';

const mapStateToProps = (state) => {
  return {
    isLoggedin: !!state.user.token,
    userToken: state.user.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser(user) {
      dispatch(addUser(user));
    },

    notify(message, type='error') {
      dispatch(addNotification(new Notification(message, type )));
    },
  }
};

class Login extends Component {
  onSubmit({ email, password }) {
    userService.login(email, password)
      .then(user => this.props.addUser(user))
      .catch(error => this.props.notify(error));
  }

  onValidationError(msgs = []) {
    msgs.map(msg => this.props.notify(msg));
  }

  onRedirectToRegistration() {
    this.props.history.push('/register');
  }

  render() {
    if (this.props.isLoggedin) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return <Redirect to={from} />;
    }

    return (
      <LoginForm
        onSubmit={this.onSubmit.bind(this)}
        onValidationError={this.onValidationError.bind(this)}
        onRedirectToRegistration={this.onRedirectToRegistration.bind(this)} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);