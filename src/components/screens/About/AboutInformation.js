import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {h,w} from '../../../constants'
import Header from '../../uikit/Header'

const AboutInformation = () => {
    const { text,container,textBlock } = styles
    return (
      <View style={container}>
        <Header/>
        <ScrollView>
        <View style={textBlock}>
          <Text style={text}>
          "אדמה ניהול הסדרים" נוסדה בשנת 2005 ע"י מומחים בעלי ניסיון של עשרות שנים בתחום הפנסיוני והינה מומחית בתחום הביטוח. אדמה הינה בין מנהלות ההסדר הבודדות בארץ שאינן בבעלות חברות ביטוח וזאת במטרה לספק ללקוחותיה אובייקטיביות בין שלל המוצרים והחברות הקיימות .אדמה עושה שימוש במערכות המתקדמות ביותר, על מנת להשיג את הפתרון הפיננסי הטוב ביותר עבורך ועבור המשפחה שלך ולהבטיח לך שקט נפשי וביטחון  כלכלי.
          </Text>
        </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 25,
  },
  container:{
    flex:1, 
    backgroundColor: '#fff',
  },
  textBlock:{
    margin: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

export default AboutInformation
