import React, { Component } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00"/>
      </View>
    );
  }
}
