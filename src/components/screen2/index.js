import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../screenHome/HomeScreen'
import CheckInsuransProfileInf from '../screen2/LoginCheckInsuranceProfile'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
        Home: Home,
        CheckInsuransProfileInf:CheckInsuransProfileInf
    },
    {
      headerMode: 'none',
      initialRouteName: 'CheckInsuransProfileInf',
    }
  );

const AppContainer = createAppContainer(RootStack);
