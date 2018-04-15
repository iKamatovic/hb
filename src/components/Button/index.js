import React, { Component } from 'react';
import PropTypes from 'prop-types';

import  './Button.css';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {},
    color: 'aqua',
    size: 'large',
    type: 'button'
  }

  render() {
    return (
      <button type={this.props.type} onClick={this.props.onClick} className={`Button ${this.props.color} ${this.props.size}`}>{this.props.label}</button>
    );
  }
};

export default Button;