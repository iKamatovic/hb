import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser, addNotification } from '../actions/';
import RegistrationForm from '../components/RegistrationForm/';
import Notification from '../models/Notification';
import * as userService from '../services/user';


const mapStateToProps = (state) => {
  return {
    isLoggedin: !!state.user.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser(user) {
      dispatch(addUser(user));
    },

    notify(message, type='error') {
      dispatch(addNotification(new Notification(message, type )));
    }
  }
};

class Register extends Component {
  onSubmit({ email, password }) {
    userService.register(email, password)
      .then(user => this.props.addUser(user))
      .catch(error => this.props.notify(error));
  }

  onValidationError(msgs = []) {
    msgs.map(msg => this.props.notify(msg));
  }

  onBackToLogin() {
    this.props.history.push('/login');
  }

  render() {
    if (this.props.isLoggedin) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return <Redirect to={from} />;
    }

    return (
      <RegistrationForm
        onSubmit={this.onSubmit.bind(this)}
        onValidationError={this.onValidationError.bind(this)}
        onBackToLogin={this.onBackToLogin.bind(this)} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));