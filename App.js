import React, { Component } from 'react';

// Components
import PlaceApp from "./src/components/PlacesApp";

// Redux
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';


export default class App extends Component {

  render() {
    const store = configureStore();

    return (
      <Provider store={ store }>
        <PlaceApp/>
      </Provider>
    );
  };
}
