import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

// Components
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";


export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => ({
        places: [...prevState.places, { name: placeName, key: Math.random().toString(), image: { uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-825x465.jpg'} }]
    }))
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => (place.key === key))
      };
    });
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  };

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={ styles.container }>
        <PlaceDetail 
          selectedPlace={ this.state.selectedPlace }
          onItemDeleted={ this.placeDeletedHandler }
          onModalClose={ this.modalCloseHandler }
        />
        <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
        <PlaceList places={ this.state.places } onItemSelected={ this.placeSelectedHandler }/>
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
