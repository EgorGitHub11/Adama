import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen'
import CheckInsuranceForm from '../screens/loginForm_CheckInsuranceProfile/LoginCheckInsuranceProfile' 
import RetiredInsuranceForm from '../screens/loginForm_RetiredInsurance/LoginRetiredInsurance'
import AboutInformation from '../screens/About/AboutInformation'
import TestOneYearInf from '../screens/TestOneYear/TestOneYearInf'
import Call from '../uikit/call'
import LetterForm from './loginForm_Letter/Login_Letter'
import WhatsApp from './WhatsApp/WhatsApp_Screen';


const index = () => {
    return (
        <AppContainer/>
    );
}


const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Call: Call,
      WhatsApp: WhatsApp,
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

export default index