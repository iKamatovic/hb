import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../components/Notifications/'
import { deleteNotification } from '../actions/';

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotification(notification) {
      dispatch(deleteNotification(notification));
    }
  }
};

class NotificationBus extends Component {
  render() {
    return (
      <Notifications notifications={this.props.notifications} onDestroy={this.props.deleteNotification} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBus);