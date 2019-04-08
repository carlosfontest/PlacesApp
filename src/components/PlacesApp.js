import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

// Components
import PlaceList from "./PlaceList/PlaceList";
import PlaceInput from "./PlaceInput/PlaceInput";
import PlaceDetail from "./PlaceDetail/PlaceDetail";

// Redux
import { connect } from 'react-redux';
import { addPlace, deletePlace, deselectPlace, selectPlace } from '../store/actions/index';


class PlacesApp extends Component {
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
    return (
      <View style={ styles.container }>
        <PlaceDetail 
          selectedPlace={ this.props.selectedPlace }
          onItemDeleted={ this.placeDeletedHandler }
          onModalClose={ this.modalCloseHandler }
        />
        <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
        <PlaceList places={ this.props.places } onItemSelected={ this.placeSelectedHandler }/>
      </View>
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
    places: state.placesReducer.places,
    selectedPlace: state.placesReducer.selectedPlace
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

export default connect(mapStateToProps, mapDispatchToProps)(PlacesApp);
