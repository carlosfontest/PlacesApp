// React & ReactNative
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// ReactNavigation
import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Screens
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import Auth from './src/screens/Auth/Auth';


// Declare tab Navigation
export const TabNavigator = createAppContainer( createBottomTabNavigator(
  {
    SharePlace,
    FindPlace
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'SharePlace') {
          iconName = `md-share`;
        } else if (routeName === 'FindPlace') {
          iconName = `ios-search`;
        }

        return <Ionicons name={ iconName } size={32} color={ tintColor } />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    }
  }
));

// Declare stack Navigation
export const StackNavigator = createAppContainer( createStackNavigator(
  {
    Login: {screen: Auth}
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
));

// Declare ROOT navigator
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
