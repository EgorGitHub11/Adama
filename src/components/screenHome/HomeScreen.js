import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Linking} from 'react-native';
import call from 'react-native-phone-call'

import Header from '../uikit/Header'
import About from '../uikit/About'
import MyRetiredInsurance from '../uikit/MyRetiredInsurance'
import TestOneYear from '../uikit/TestOneYear'
import CheckInsuranceProfile from '../uikit/CheckInsuranceProfile'
import PhoneNumber from '../screen5/PhoneNumber'
import WhatsApp from '../uikit/WhatsApp'
import Letter from '../uikit/Letter'



const openWhatsApp = (url,celNumber) => {
  celNumber = '+972585648883'
  url = `whatsapp://send?phone= ${celNumber}`;
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
        Linking.openURL(url);
    } else {
        alert('WhatsApp is not installed')
    }
});
}

const openPhoneNumber = (args) => {
  args = {
    number: '077-9985020',
    prompt: false 
  }
  return( 
    call(args).catch(console.error)
  )
}


const HomeScreen = (props) => {  
    const {mainContainer, childMainContainer,bottomContainer} = styles
    console.log(props.navigation)
    return (
      <View style={mainContainer}>
        <StatusBar backgroundColor="#528156"/>
        <Header/>
        <View style={childMainContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestOneYearInf')}>
                <TestOneYear/>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => props.navigation.navigate('CheckInsuranceForm')}>
                <CheckInsuranceProfile/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('AboutInformation')}>
                <About/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('RetiredInsuranceForm')}>
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

                <TouchableOpacity onPress={() => props.navigation.navigate('LetterForm')}>
                  <Letter/>
                </TouchableOpacity>
              </View>
      </View>
    );
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