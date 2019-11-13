import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import TestOneYearInf from '../screen1/TestOneYear'

export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
      TestOneYearInf:TestOneYearInf,
    },
    {
      headerMode: 'none',
      initialRouteName: 'TestOneYearInf',
    }
  );

const AppContainer = createAppContainer(RootStack);
