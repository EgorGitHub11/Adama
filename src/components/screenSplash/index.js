import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import HomeScreenRoute from '../screenHome/index'
import SplashScreen from './SplashScreen'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}


const InitialNavigator = createSwitchNavigator(
    {
      Splash:{screen:SplashScreen},
      Home:{screen:HomeScreenRoute}
    },
    {
      initialRouteName:'Splash'
    }
  )

const AppContainer = createAppContainer(InitialNavigator);
