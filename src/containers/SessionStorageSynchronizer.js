import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/';
import * as userService from '../services/user';
import * as sessionStorageService from '../services/sessionStorage';

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser(user) {
      dispatch(addUser(user));
    }
  }
};

class SessionStorageSynchronizer extends Component {

  constructor() {
    super();

    this.state = {
      fetchingInProgress: false
    }
  }

  componentDidMount() {
    const token = sessionStorageService.getToken();

    if (token) {
      this.setState({ fetchingInProgress: true });

      userService.getInfo(token)
        .then(user => this.props.addUser(user))
        .catch(error => console.log(error))
        .finally(() => this.setState({ fetchingInProgress: false }));
    }
  }

  componentDidUpdate() {
    if (this.props.token && this.props.token !== sessionStorageService.getToken()) {
      sessionStorageService.setToken(this.props.token);
    } else if (!this.props.token ) {
      sessionStorageService.removeToken();
    }
  }

  render() {
    return (
      <div className="SessionStorageSynchronizer">
        {!this.state.fetchingInProgress ? this.props.children : null}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionStorageSynchronizer);