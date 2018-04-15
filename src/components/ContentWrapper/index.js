import React, { Component } from 'react';
import './ContentWrapper.css';

class ContentWrapper extends Component {
  render() {
    return (
      <div className="ContentWrapper">
        { this.props.children }
      </div>
    )
  }
}

export default ContentWrapper;