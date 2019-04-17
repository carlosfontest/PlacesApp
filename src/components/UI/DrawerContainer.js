// React & ReactNative
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';

// React Navigation
import { DrawerItems } from 'react-navigation';

// Redux
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/index';


class DrawerContainer extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.androidSafeArea }>
        <View style={ styles.container }>

          <View style={ styles.linksContainer }>
            <View style={ styles.drawerItemsContainer }>
              <DrawerItems { ...this.props }/>
            </View>
  
            <View style={ styles.logoutItemsContainer }>
              <TouchableOpacity onPress={ () => this.props.onRemoveUser() } >
                <Text style={ styles.logoutItemText }>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  drawerItemsContainer: {

  },
  logoutItemsContainer:{

  },
  linksContainer: {
    justifyContent: 'space-evenly'
  },
  logoutItemText: {
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
    margin: 16,
    fontFamily: 'Roboto',
    fontSize: 15
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

// Connect Redux
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveUser: () => dispatch(removeUser())
  };
};

export default connect(null, mapDispatchToProps)(DrawerContainer);
