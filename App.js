import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

// Components
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// Redux
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './src/store/configureStore';
import { addPlace, deletePlace, deselectPlace, selectPlace } from './src/store/actions/index';


class App extends Component {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    const stores = configureStore();
    const myContext = React.createContext();

    return (
      <Provider store={ stores }>
        <View style={ styles.container }>
          <PlaceDetail 
            selectedPlace={ this.props.selectedPlace }
            onItemDeleted={ this.placeDeletedHandler }
            onModalClose={ this.modalCloseHandler }
          />
          <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
          <PlaceList places={ this.props.places } onItemSelected={ this.placeSelectedHandler }/>
        </View>
      </Provider>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40,
    display: "flex"
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps, )(App);
