import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {w,h} from '../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="info" size={60} color="#528156" />;

const About = () =>{
    return (
      <View style={styles.container}>
        <View style={styles.icon}>{myIcon}</View>
        <Text style={styles.text}>מי אנחנו "אדמה ניהול הסדרים"</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
  width:w / 2.4,
  height: h / 4,
  margin: 10,
  borderRadius: 10,
  backgroundColor: '#fff',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  backgroundColor: 'white',
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.4,
  elevation: 7
},
text:{
  textAlign:'center',
  fontSize: 18,
},
icon:{
  marginBottom: 10
}
});

export default About