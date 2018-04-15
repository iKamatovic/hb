import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './Logout.css';

class Logout extends Component {

  static propTypes = {
    user: PropTypes.string,
    onLogout: PropTypes.func,
  }

  static defaultProps = {
    user: '',
    onLogout: () => {},
  }

  render() {
    return (
      <div className="Logout right">
        <span className="user">{this.props.user}</span>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    )
  }
}

export default Logout;