import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: !!state.user.token
  }
};

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    { ...rest }
    render={ props => {
      return authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
    }
  />
);

export default connect(mapStateToProps)(PrivateRoute);