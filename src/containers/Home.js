import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImages, addNotification, deleteToken } from '../actions/';
import ContentWrapper from '../components/ContentWrapper/';
import Header from '../components/Header/';
import InfiniteScroll from '../components/InfiniteScroll/';
import Grid from '../components/Grid/';
import Thumbnail from '../components/Thumbnail/';
import Logo from '../components/Logo/';
import Logout from '../components/Logout/';
import * as imagesService from '../services/images';
import * as userService from '../services/user';
import Notification from '../models/Notification';

const mapStateToProps = (state) => {
  return {
    images: state.images,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImages(images) {
      dispatch(addImages(images));
    },

    deleteToken() {
      dispatch(deleteToken());
    },

    notify(message, type='error') {
      dispatch(addNotification(new Notification(message, type )));
    }
  }
};

class Home extends Component {
  constructor() {
    super();

    this.state = {
      page: 0
    };
  }

  componentDidMount() {
    imagesService.fetch(this.state.page)
      .then(images => this.props.addImages(images))
      .catch(error => this.props.notify(error));
  }

  onEndReached() {
    imagesService.fetch(this.state.page + 1)
      .then(images => {
        this.setState({page: this.state.page + 1});
        this.props.addImages(images);
      })
      .catch(error => this.props.notify(error));
  }

  onLogout() {
    userService.logout(this.props.user.token)
    .then(() => this.props.deleteToken())
    .catch(error => this.props.notify(error));
  }

  render() {
    return (
      <ContentWrapper>
        <InfiniteScroll onEndReached={this.onEndReached.bind(this)}>
        <Header>
          <Logo size="small" />
          <Logout user={this.props.user.email} onLogout={this.onLogout.bind(this)} />
        </Header>
          <Grid>
            { this.props.images.map(image => <Thumbnail key={image.id} src={image.url} title={image.name} description={image.description} />) }
          </Grid>
        </InfiniteScroll>
      </ContentWrapper>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);