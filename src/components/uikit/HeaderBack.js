import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {h,w} from '../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="arrow-back" size={35} color="#528156" />;

const Header = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Home')}>
            <View style={styles.icon}>{myIcon}</View>
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../logo/Logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      elevation: 7
  },
  text:{
      fontSize: 30,
  },
  logo:{
      width: w / 1.5,
      height: 70,
      resizeMode: 'contain',
      margin: 20
  },
  backBtn:{
      alignSelf: 'flex-start', 
  },
  icon:{
      width: w,
      paddingLeft: 10,
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  }
})

export default Header