import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Letter from './Login_Letter'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
        Letter:Letter,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Letter',
    }
  );

const AppContainer = createAppContainer(RootStack);
