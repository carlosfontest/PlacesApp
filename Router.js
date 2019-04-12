// React & ReactNative
import React from 'react';

// ReactNavigation
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Screens
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import Auth from './src/screens/Auth/Auth';


// Declare tab Navigation (SignIn)
const TabNavigator = createMaterialBottomTabNavigator(
  {
    SharePlace: {
      screen: SharePlace,
      navigationOptions: {
        tabBarLabel: 'Share',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-share' size={24} color={ tintColor } />
        )
      }
    },
    FindPlace: {
      screen: FindPlace,
      navigationOptions: {
        tabBarLabel: 'Find',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-search' size={24} color={ tintColor } />
        )
      }
    }
  },
  {
    activeTintColor: '#3C978B',
    inactiveTintColor: 'grey',
    barStyle: {
      backgroundColor: "#F2F2F2",
      borderTopWidth: 0.5,
      borderTopColor: 'grey'
    },
    shifting: true
  }
);

// Declare stack Navigation (No SingIn)
const StackNavigator = createStackNavigator(
  {
    Login: { screen: Auth }
  },
  {
    initialRouteName: 'Login'
  }
);

// Declare Switch Navigation
export const createRootNavigator = (signedIn = false) => {
  return createAppContainer( createSwitchNavigator(
    {
      SignedIn: { screen: TabNavigator },
      SignedOut: { screen: StackNavigator }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  ));
};
