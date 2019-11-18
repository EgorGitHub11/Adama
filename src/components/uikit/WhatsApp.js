import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="face" size={40} color="#528156" />;

const WhatsApp = () =>{
    const { icon } = styles
    return (
      <View>
        <View style={icon}>
        <Image style={styles.logo} source={require('../screen6/iconWhatsApp.png')}/>
        </View>
      </View>
    );
  }

 const styles = StyleSheet.create({
  icon:{
    marginBottom:15
  },
  logo:{
    height:50,
    width:50
  }
 });

 export default WhatsApp