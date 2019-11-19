import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './HomeScreen'
import CheckInsuranceForm from '../screen2/LoginCheckInsuranceProfile' 
import RetiredInsuranceForm from '../screen4/LoginRetiredInsurance'
import AboutInformation from '../screen3/AboutInformation'
import TestOneYearInf from '../screen1/TestOneYear'
import LetterForm from '../screen7/Login_Letter'
import HomeBack from '../uikit/HeaderBack'


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
      LetterForm: LetterForm,
      CheckInsuranceForm: CheckInsuranceForm,
      RetiredInsuranceForm: RetiredInsuranceForm,
      AboutInformation:AboutInformation,
      TestOneYearInf:TestOneYearInf
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home',
    }
  );

const AppContainer = createAppContainer(RootStack);
