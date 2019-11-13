import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginRetiredInsurance from './LoginFormRetiredInsurance'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
        LoginRetiredInsurance:LoginRetiredInsurance,
    },
    {
      headerMode: 'none',
      initialRouteName: 'LoginRetiredInsurance',
    }
  );

const AppContainer = createAppContainer(RootStack);
