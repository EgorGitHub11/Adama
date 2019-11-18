import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Linking} from 'react-native';
import Header from '../uikit/Header'
import About from '../uikit/About'
import MyRetiredInsurance from '../uikit/MyRetiredInsurance'
import TestOneYear from '../uikit/TestOneYear'
import CheckInsuranceProfile from '../uikit/CheckInsuranceProfile'
import PhoneNumber from '../screen5/PhoneNumber'
import WhatsApp from '../uikit/WhatsApp'
import Letter from '../uikit/Letter'

import {openPhoneNumber, openWhatsApp} from '../../constants'
import { ScrollView } from 'react-native-gesture-handler';




class HomeScreen extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  render(){
    const {mainContainer, childMainContainer,bottomContainer} = styles
    return (
      <View style={mainContainer}>
        <StatusBar backgroundColor="#528156"/>
        <Header/>
        <View style={childMainContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TestOneYearInf')}>
                <TestOneYear/>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('CheckInsuranceForm')}>
                <CheckInsuranceProfile/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutInformation')}>
                <About/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RetiredInsuranceForm')}>
                <MyRetiredInsurance/>
            </TouchableOpacity>
        </View>
              <View style={bottomContainer}>
                <TouchableOpacity onPress={openPhoneNumber}>
                  <PhoneNumber/>
                </TouchableOpacity>

                <TouchableOpacity onPress={openWhatsApp}>
                  <WhatsApp/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('LetterForm')}>
                  <Letter/>
                </TouchableOpacity>
              </View>
      </View>
    );
  }
  }
  

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
  },
  childMainContainer:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'center',
    alignContent: 'center',
    flexWrap:'wrap'
  },
  bottomContainer:{
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
}
})

export default HomeScreen