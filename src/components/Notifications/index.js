import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/';
import './Notifications.css';


class Notifications extends Component {
  static propTypes = {
    notifications:  PropTypes.array,
    onDestroy: PropTypes.func
  }

  static defaultProps = {
    Notifications: [],
    onDestroy: () => {},
  }

  render() {
    return (
      <div className="Notifications">
        {
          this.props.notifications.map((n, index) => <Notification
            key={index}
            type={n.type}
            message={n.message}
            selfDestroy={true}
            onDestroy={() => this.props.onDestroy(n) } />
          )
        }
      </div>
    )
  }
}

export default Notifications;