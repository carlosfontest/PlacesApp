// React & ReactNative
import React, { Component } from 'react'
import { View, StyleSheet, Platform, StatusBar, SafeAreaView, Button, TouchableOpacity, Text } from 'react-native'

// Redux
import { connect } from 'react-redux';

// Icons
import { Ionicons } from '@expo/vector-icons';

// ReactNavigation
import { StackActions } from 'react-navigation';

// Components
import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Find Place',
      headerRight: (
        <TouchableOpacity onPress={ () => navigation.toggleDrawer() } style={{ marginRight: 15 }}>
          <Ionicons name="ios-menu" size={38} />
        </TouchableOpacity>
      )
    }
  };

  itemSelectdHandler = (key) => {
    const selectedPlace = this.props.places.find(place => place.key === key);

    const pushPlaceDetail = StackActions.push({
      routeName: 'PlaceDetail',
      params: {
        selectedPlace
      }
    });

    this.props.navigation.dispatch(pushPlaceDetail)
  }

  render() {
    return (
      <SafeAreaView style={ styles.androidSafeArea }>
        <View style={ styles.placeListContainer }>
          <PlaceList places={ this.props.places } onItemSelected={ this.itemSelectdHandler }></PlaceList>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  placeListContainer: {
    width: '85%',
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
const mapStateToProps = (state) => {
  return {
    places: state.placesReducer.places
  };
};

export default connect(mapStateToProps, null)(FindPlace);
