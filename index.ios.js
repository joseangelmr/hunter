import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/redux/store/configureStore';

const store = configureStore();

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('hunter', () => Main);
