import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import HomeScreen from './HomeScreen'
import CheckInsuranceForm from '../screen2/index' 
import RetiredInsuranceForm from '../screen4/index'
import AboutInformation from '../screen3/index'
import TestOneYearInf from '../screen1/index'
import LetterForm from '../screen7/index'
import WhatsApp from '../screen6/WhatsApp_Screen';


export default class Index extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}


const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      WhatsApp: WhatsApp,
      LetterForm: LetterForm,
      CheckInsuranceForm: CheckInsuranceForm,
      RetiredInsuranceForm: RetiredInsuranceForm,
      AboutInformation:AboutInformation,
      TestOneYearInf:TestOneYearInf
    },
    {
      headerMode: 'none',
      initialRouteName: '',
    }
  );

const AppContainer = createAppContainer(RootStack);
