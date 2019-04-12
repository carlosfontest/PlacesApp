// React & ReactNative
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

// ReactNavigation
import { createRootNavigator } from './Router';


export default class App extends Component {
  state = {
    signedIn: false,
    store: configureStore()
  }

  componentDidMount() {
    // Suscribirse a todos los cambios del store para saber cuando un user se ha logeado
    this.state.store.subscribe( () => {
      this.setState( (prevState) => ({
        // Si no hay ningun user, signedIn = false
        signedIn: prevState.store.getState().authReducer.userName === '' ? false : true
      }));
    });
  }

  render() {
    const RootStack = this.state.signedIn === true ? createRootNavigator(true) : createRootNavigator(false);

    return (
      <Provider store={ this.state.store }>
        <RootStack/>
      </Provider>
    );
  };
}
