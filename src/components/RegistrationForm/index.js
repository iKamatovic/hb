import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/';
import Button from '../Button/';
import Logo from '../Logo/';
import  './RegistrationForm.css';

const EMAIL_ERROR_MSG = 'Entered e-mail is invalid';
const PASSWORD_ERROR_MSG = 'Entered password is invalid';
const CONFIRMATION_ERROR_MSG = 'Password confirmation doesn\'t match password';

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onValidationError: PropTypes.func,
    onBackToLogin: PropTypes.func
  }

  static defaultProps = {
    onSubmit: () => {},
    onValidationError: () => {},
    onBackToLogin: () => {}
  }

  onBackToLogin(e) {
    e.preventDefault();

    this.props.onBackToLogin();
  }

  onSubmit(e) {
    e.preventDefault();

    const { valid, msgs } =  this.validate();

    if (!valid) {
      this.props.onValidationError(msgs);
      return;
    }

    const { email, password } = this.refs.form.elements;

    return this.props.onSubmit({ email: email.value, password: password.value });
  }

  validate() {
    let msgs = [];

    if (!this.isEmailValid()) {
      msgs.push(EMAIL_ERROR_MSG);
    }

    if (!this.isPasswordValid()) {
      msgs.push(PASSWORD_ERROR_MSG);
    }

    if (!this.isPasswordConfirmationValid()) {
      msgs.push(CONFIRMATION_ERROR_MSG);
    }

    return { valid: msgs.length === 0, msgs };
  }

  isEmailValid() {
    const { email } = this.refs.form.elements;
    const re = new RegExp('^[A-Za-z0-9.-_]+@[A-Za-z0-9-_]+.[A-Za-z]{2,3}$');

    return re.test(email.value);
  }

  isPasswordValid() {
    const { password } = this.refs.form.elements;
    const re = new RegExp('^[A-Za-z0-9._-]{6,}$');

    return re.test(password.value);
  }

  isPasswordConfirmationValid() {
    const { password, confirmation } = this.refs.form.elements;

    return password.value === confirmation.value;
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)} className="RegistrationForm">
        <div className="Container">
          <Logo />
          <Input placeholder="Enter an e-mail" name="email" />
          <Input type="password" name="password" placeholder="Enter a password" />
          <Input type="password" name="confirmation" placeholder="Re-enter a password" />
          <div className="FormButtons">
            <Button onClick={this.onBackToLogin.bind(this)} label="Back to login" color="lightRed" size="medium" />
            <Button type="submit" label="Submit" color="aqua" size="medium" />
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm;