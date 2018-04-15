import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Description.css';

class Description extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    compact: PropTypes.bool
  }

  static defaultProps = {
    compact: true
  }

  render() {
    return (
      <div className="Description">
        <div className="wrapper">
          <p className="title">{this.props.title}</p>
          <p className={ `content ${this.props.compact ?  'hidden': 'visible'}` }>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default Description;