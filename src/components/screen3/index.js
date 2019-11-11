import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import AboutInf from '../screen3/AboutInformation'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
      AboutInf:AboutInf
    },
    {
      headerMode: 'none',
      initialRouteName: 'AboutInf',
    }
  );

const AppContainer = createAppContainer(RootStack);
