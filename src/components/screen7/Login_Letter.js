import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import LoginFormLetter from './LoginForm_Letter'
import {h,w} from '../../constants'

const LoginLetter = (props) => {
    const {container,logoContainer,formContainer,logo} = styles
    return (
        <View style={container}>
        <View style={logoContainer}>
          <Image style={logo} source={require('../../logo/Logo.png')}/>
        </View>
        <View style={formContainer}>
          <LoginFormLetter navigation={props.navigation}/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    logoContainer:{
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      elevation: 7,
    },
    logo:{
      width: w,
      height: h / 7,
      resizeMode: 'contain',
      margin: 'auto',
    },
    formContainer:{
      flex: 4,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }
});

export default LoginLetter