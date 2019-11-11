import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="call" size={40} color="#528156" />;


const PhoneNumber = (props) => {
    const { icon } = styles
    return (
      <View>
        <View style={icon}>{myIcon}</View>
      </View>
    );
}

const styles = StyleSheet.create({
  icon:{
    marginBottom:15
  }
});

export default PhoneNumber
