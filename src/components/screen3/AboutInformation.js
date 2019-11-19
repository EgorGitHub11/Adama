import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {h,w} from '../../constants'
import HeaderBack from '../uikit/HeaderBack'

const AboutInformation = (props) => {
    const { text,container,textBlock } = styles
    return (
      <View style={container}>
        <HeaderBack navigation={props.navigation}/>
        <ScrollView>
        <View style={textBlock}>
          <Text style={text}>
          "אדמה ניהול הסדרים"  נוסדה בשנת 2005 ע"י מומחים בעלי ניסיון של עשרות שנים בתחום הפנסיוני והינה מומחית בתחום הביטוח. 

אדמה הינה בין מנהלות ההסדר הבודדות בארץ שאינן בבעלות חברות ביטוח וזאת במטרה לספק ללקוחותיה אובייקטיביות בין שלל המוצרים והחברות הקיימות .

אדמה עושה שימוש במערכות המתקדמות ביותר, על מנת להשיג את הפתרון הפיננסי הטוב ביותר עבורך ועבור המשפחה שלך ולהבטיח לך שקט נפשי וביטחון  כלכלי.
          </Text>
        </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 25,
    textAlign: 'center'
  },
  container:{
    flex:1, 
    backgroundColor: '#fff',
  },
  textBlock:{
    padding: 10,
    backgroundColor: '#fff',
  }
});

export default AboutInformation
