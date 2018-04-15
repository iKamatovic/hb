import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './router/';
import NotificationBus from './containers/NotificationBus';
import SessionStorageSynchronizer from './containers/SessionStorageSynchronizer';
import store from './store/';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SessionStorageSynchronizer>
            <Router />
          </SessionStorageSynchronizer>
          <NotificationBus />
        </div>
      </Provider>
    );
  }
}

export default App;
