// React & ReactNative
import React from 'react';

// ReactNavigation
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Screens
import SharePlace from './src/screens/SharePlace/SharePlace';
import FindPlace from './src/screens/FindPlace/FindPlace';
import Auth from './src/screens/Auth/Auth';

import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import DrawerContainer from './src/components/UI/DrawerContainer';


// StackNavigator to FindPlaceTab
const FindPlaceStackNavigation = createStackNavigator({
  FindPlace: FindPlace,
  PlaceDetail: PlaceDetail,
},{ headerLayoutPreset: 'center' });

// StackNavigator to SharePlaceTab
const SharePlaceStackNavigation = createStackNavigator({
  SharePlace: SharePlace
},{ headerLayoutPreset: 'center' });

// Declare tab Navigation (SignIn)
const TabNavigator = createMaterialBottomTabNavigator(
  {
    FindPlace: {
      screen: FindPlaceStackNavigation,
      navigationOptions: {
        tabBarLabel: 'Find',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-search' size={24} color={ tintColor } />
        )
      }
    },
    SharePlace: {
      screen: SharePlaceStackNavigation,
      navigationOptions: {
        tabBarLabel: 'Share',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-share' size={24} color={ tintColor } />
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

// Declare Principal Draw Navigator
const drawNavigator = createDrawerNavigator({
  Home: TabNavigator
},{
  contentComponent: DrawerContainer
});

// Declare stack Navigation (No SingIn)
const StackNavigator = createStackNavigator(
  {
    Login: { screen: Auth }
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      header: null
  }
  }
);

// ---------------------------------------------------------
// Declare Switch Navigation
export const createRootNavigator = (signedIn = false) => {
  return createAppContainer( createSwitchNavigator(
    {
      SignedIn: { screen: drawNavigator },
      SignedOut: { screen: StackNavigator }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  ));
};
