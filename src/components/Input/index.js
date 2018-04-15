import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './Input.css';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    name: '',
    placeholder: '',
    onChange: () => {}
  }

  render() {
    return (
      <input
        className="Input"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange} />
    );
  }
};

export default Input;