import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import PhoneIcon from './PhoneNumber'
import Call from './call'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
        Call:Call,
        PhoneIcon:PhoneIcon
    },
    {
      headerMode: 'none',
      initialRouteName: 'Call',
    }
  );

const AppContainer = createAppContainer(RootStack);
