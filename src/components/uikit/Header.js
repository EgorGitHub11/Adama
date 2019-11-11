import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import {h,w} from '../../constants'

const Header = (props) => {
    return(
        <View style={styles.container}>
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
      width: w / 2.4,
      height: 70,
      resizeMode: 'contain',
      margin: 20
  },
  backBtn:{
      alignSelf: 'flex-start', 
  }
})

export default Header