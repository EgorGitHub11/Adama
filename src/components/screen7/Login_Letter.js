import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import LoginFormLetter from './LoginForm_Letter'
import {h,w} from '../../constants'
import HeaderBack from '../uikit/HeaderBack'

import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="arrow-back" size={35} color="#528156" />;

const LoginLetter = (props) => {
    const {container,formContainer} = styles
    return (
        <View style={container}>
        <HeaderBack navigation={props.navigation}/>
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
    },
    icon:{
      width: w,
      paddingLeft: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  }
});

export default LoginLetter