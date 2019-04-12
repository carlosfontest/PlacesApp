// React & ReactNative
import React, { Component } from 'react'
import { View, StyleSheet, Platform, StatusBar, SafeAreaView, Text } from 'react-native'

// Redux
import { connect } from 'react-redux';

// Components
import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlace extends Component {
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: {
      textAlign:'center', 
      alignSelf:'center',
      flex:1
    }
  };

  render() {
    return (
      <SafeAreaView style={ styles.androidSafeArea }>
        <View style={ styles.placeListContainer }>
          <Text style={ styles.titleText }>FIND A PLACE</Text>
          <PlaceList places={ this.props.places }></PlaceList>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  placeListContainer: {
    marginTop: 20,
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
