import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="email" size={40} color="#528156" />;

const Letter = (props) => {
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

export default Letter