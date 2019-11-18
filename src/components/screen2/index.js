import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CheckInsuransProfileInf from './LoginCheckInsuranceProfile'


export default class indexTestOneYear extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
  }
}


const RootStack = createStackNavigator(
    {
        CheckInsuransProfileInf:CheckInsuransProfileInf,
    },
    {
      headerMode: 'none',
      initialRouteName: 'CheckInsuransProfileInf',
    }
  );

const AppContainer = createAppContainer(RootStack);
