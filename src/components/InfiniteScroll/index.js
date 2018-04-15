import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll extends Component {
  static propTypes = {
    onEndReached: PropTypes.func
  }

  static defaultProps = {
    onEndReached: () => {}
  }

  componentDidMount() {
    this.scrollHandler = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  onScroll() {
    if (Math.round(this.refs.bottomLine.getBoundingClientRect().top) === document.body.offsetHeight) {
      this.props.onEndReached();
    }
  }

  render() {
    return (
      <div className="InfiniteScroll">
        {this.props.children}
        <div ref="bottomLine" />
      </div>
    )
  }
}

export default InfiniteScroll;