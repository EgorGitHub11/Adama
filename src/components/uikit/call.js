import React, { Component } from 'react';
import { View, Text } from 'react-native';
import call from 'react-native-phone-call'

export default class Call extends Component {
  render() {
    const args = {
        number: '9093900003', // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
       
      call(args).catch(console.error)
    return (
      <View>

      </View>
    );
  }
}
