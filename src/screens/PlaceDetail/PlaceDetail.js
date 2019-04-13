// React & ReactNative
import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// Icons
import { Ionicons } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'


class PlaceDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.selectedPlace.name
    }
  };

  render() {
    const { selectedPlace } = this.props.navigation.state.params;

    return (
      <View style={ styles.container }>
        <View>
          <Image source={ selectedPlace.image } style={ styles.placeImage } />
          <Text style={ styles.placeName }>{ selectedPlace.name }</Text>
        </View>
        <View>
          <TouchableOpacity onPress={ () => this.props.onDeletePlace(selectedPlace.key) } style={ styles.deleteButton }>
            <Ionicons name="md-trash" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  deleteButton: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});

// Connect to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);