import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import {h,w} from '../../constants'
import LoginForm from './LoginFormRetiredInsurance'
import Header from '../uikit/Header'

const Login = (props) => {
    const {container,formContainer,logo, logoC} = styles
    return (
       <View style={container}>
         <View style={logoC}>
           <Image style={logo} source={require('../../logo/Logo.png')}/>
         </View>
          <View style={formContainer}>
            <LoginForm navigation={props.navigation}/> 
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    logoC:{
      flex:1.5,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent:'center',
      shadowColor:'#000',
      shadowRadius: 8,
      shadowOffset:{width:0, height:5},
      shadowOpacity: 0.4,
      elevation: 7
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

export default Login