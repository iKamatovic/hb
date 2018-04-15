import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from '../Description/'
import  './Thumbnail.css';

class Thumbnail extends Component {

  constructor() {
    super();

    this.state = {
      compactDescription: true
    };
  }

  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  onClick() {
    console.log('click');
    this.setState({ compactDescription: !this.state.compactDescription });
  }

  render() {
    return (
      <div className="Thumbnail" onClick={this.onClick.bind(this)}>
        <img src={this.props.src} alt={this.props.title} />
        <Description title={this.props.title} content={this.props.description} compact={this.state.compactDescription}/>
      </div>
    )
  }
}

export default Thumbnail;