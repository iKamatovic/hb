import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './Logo.css';
import logo from './logo.png'

class Logo extends Component {

  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }

  static defaultProps = {
    size: 'medium',
  }

  render() {
    return (
      <img className={`Logo ${this.props.size} ${this.props.className || ''}`} src={logo} alt={"heybeach"} />
    )
  }
}

export default Logo;