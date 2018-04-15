import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/';
import Button from '../Button/';
import Logo from '../Logo/';
import  './LoginForm.css';

const EMAIL_ERROR_MSG = 'Entered e-mail is invalid';
const PASSWORD_ERROR_MSG = 'Entered password is invalid';

class LoginForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onValidationError: PropTypes.func,
    onRedirectToRegistration: PropTypes.func
  }

  static defaultProps = {
    onSubmit: () => {},
    onValidationError: () => {},
    onRedirectToRegistration: () => {}
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

  onRedirectToRegistration(e) {
    e.preventDefault();

    this.props.onRedirectToRegistration();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} ref="form" className="LoginForm">
        <div className="Container">
          <Logo />
          <Input name="email" placeholder="Enter an e-mail" />
          <Input type="password" name="password" placeholder="Enter a password" />
          <div className="FormButtons">
            <Button onClick={this.onRedirectToRegistration.bind(this)} label="Register" color="darkGray" size="medium" />
            <Button type="submit" label="Login" color="aqua" size="medium" />
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm;