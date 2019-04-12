// React & ReactNative
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Text } from 'react-native';

// Components
import PlaceInput from "../../components/PlaceInput/PlaceInput";

// Redux
import { connect } from 'react-redux';
import { addPlace, deletePlace, deselectPlace, selectPlace } from '../../store/actions/index';


class SharePlace extends Component {
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
    placeAddedHandler = (placeName) => {
      this.props.onAddPlace(placeName);
    }

    return (
      <SafeAreaView style={ styles.androidSafeArea }>
        <View style={ styles.placeInputContainer }>
          <Text style={ styles.titleText }>SHARE A PLACE</Text>
          <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
        </View>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  placeInputContainer: {
    marginTop: 20,
    width: '90%'
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    letterSpacing: 2
  }
});

// Connect to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);
