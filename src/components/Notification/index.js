import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './Notification.css';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['error', 'neutral', 'success']),
    selfDestory: PropTypes.bool,
    onDestroy: PropTypes.func
  }

  static defaultProps = {
    message: '',
    type: 'neutral',
    selfDestroy: false,
    onDistory: () => {}
  }

  componentDidMount() {
    if (this.props.selfDestroy) {
      setTimeout((this.props.onDestroy), 3000);
    }
  }

  render() {
    return (
      <div className={`Notification ${this.props.type}`}>
        {this.props.message}
      </div>
    )
  }
}

export default Notification;