import React, { Component } from 'react';

// Screens
import Auth from './src/screens/Auth/Auth';

// Redux
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

// ReactNavigation
import { TabNavigator, StackNavigator, createRootNavigator } from './Router';


export default class App extends Component {
  state = {
    signedIn: false,
    store: configureStore()
  }

  componentDidMount() {

    this.state.store.subscribe( () => {
      this.setState( (prevState) => ({
        signedIn: prevState.store.getState().authReducer.userName === '' ? false : true
      }));
    });
    
  }

  render() {
    let RootStack = this.state.signedIn === true ? createRootNavigator(true) : createRootNavigator(false);

    return (
      <Provider store={ this.state.store }>
        <RootStack/>
      </Provider>
    );
  };
}
