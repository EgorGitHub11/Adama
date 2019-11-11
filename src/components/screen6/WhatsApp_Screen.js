import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';

export default class WhatsApp_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url: 'https://facebook.github.io/react-native/docs/linking'
    };
  }

  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View>
        <Text> WhatsApp_Screen </Text>
      </View>
    );
  }
}
