/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, AppState} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './src/router';
import {name as appName} from './app.json';
import store from './src/store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'inactive') {
      console.log('the app is closed');
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;
AppRegistry.registerComponent(appName, () => App);
