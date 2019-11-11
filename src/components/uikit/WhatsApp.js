import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="face" size={40} color="#528156" />;

const WhatsApp = (props) =>{
    const { icon } = styles
    return (
      <View>
        <View style={icon}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://img.icons8.com/color/48/000000/whatsapp.png'}}
        />
        </View>
      </View>
    );
  }

 const styles = StyleSheet.create({
  icon:{
    marginBottom:15
  }
 });

 export default WhatsApp