import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {h,w} from '../../constants'
import LoginForm from './LoginFormRetiredInsurance'
import Header from '../uikit/Header'

import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="arrow-back" size={35} color="#528156" />;

const Login = (props) => {
    const {container,formContainer,logo,logoContainer,logoC} = styles
    return (
       <View style={container}>
         <View style={logoContainer}>

         <TouchableOpacity onPress = {() => props.navigation.navigate('Home')}>
            <View style={styles.icon}>{myIcon}</View>
          </TouchableOpacity>

          <View style={logoC}>
           <Image style={logo} source={require('../../logo/Logo.png')}/>
          </View>

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
    logoContainer:{
      flex:1,
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
      width:'100%',
      height: '100%',
      resizeMode: 'contain',
    },
    formContainer:{
      flex:3,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    icon:{
      width: w,
      paddingLeft: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  logoC:{
    width: w / 2,
      height: h/9,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
}
});

export default Login