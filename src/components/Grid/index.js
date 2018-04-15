import React, { Component } from 'react';
import  './Grid.css';

class Thumbnail extends Component {
  render() {
    return (
      <div className="Grid">
        {this.props.children}
      </div>
    )
  }
}

export default Thumbnail;