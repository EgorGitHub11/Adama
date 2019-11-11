import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {h,w} from '../../../constants'

export default class SplashScreen extends Component {
  UNSAFE_componentWillMount = () => {
    setTimeout(() => {
        this.props.navigation.navigate('Home')
    }, 6000)
  };
  

  render() {
      const {logo, mainC} = styles
    return (
      <View style={mainC}>
        <View>
            <Image style={logo} source={require('../../../logo/Logo.png')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo:{
        width: w,
        height: h / 7,
        resizeMode: 'contain',
        margin: 'auto',
    },
    mainC:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center'
    }
});