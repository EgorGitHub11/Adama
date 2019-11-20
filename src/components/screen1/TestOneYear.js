import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, ImageBackground} from 'react-native';
import {h,w} from '../../constants'
import HeaderBack from '../uikit/HeaderBack' 
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="play-circle-filled" size={70} color="#fff" />;




export default class TestOneYearInf extends Component {
  constructor(props) {
    super(props);
    this.open1Video = this.open1Video.bind(this)
    this.open2Video = this.open2Video.bind(this)
    this.open3Video = this.open3Video.bind(this)
    this.open4Video = this.open4Video.bind(this)
    this.state = {
    };
  }

  open1Video = (url) => {
    url = 'https://www.youtube.com/watch?v=DQS9ACNIY4c'
   return(
     Linking.openURL(url).catch(err => console.error('An error occurred', err))
   )
 }

 open2Video = (url) => {
  url = 'https://www.youtube.com/watch?v=yWiFbwcrvWg'
 return(
   Linking.openURL(url).catch(err => console.error('An error occurred', err))
 )
}

open3Video = (url) => {
  url = 'https://www.youtube.com/watch?v=FgYaNzH-iuU'
 return(
   Linking.openURL(url).catch(err => console.error('An error occurred', err))
 )
}
open4Video = (url) => {
  url = 'https://www.youtube.com/watch?v=GnSMgGSUCiE'
 return(
   Linking.openURL(url).catch(err => console.error('An error occurred', err))
 )
}


  render() {
    const {textBlock, text, container, videoContainer, textVideoLink, iconTextCintainer} = styles
    return (
      <View style={container}>
        <HeaderBack navigation={this.props.navigation}/>
        <ScrollView>
        <View style={textBlock}>
          <Text style={text}>
          מהי בדיקת תיק ביטוח ומתי כדאי לבצע את הבדיקה? מדוע  בדיקת תיק ביטוח יכולה לשפר את תנאי הפוליסות השונות וגם לחסוך בכסף?
          </Text>
        </View>

        <View style={textBlock}>
          <Text style={text}>
          בדיקת תיק הביטוח על ידי סוכן מקצועי נועדה לוודא שפוליסות הביטוח השונות מספקות את הכיסויים הביטוחיים, ומתאימות  ביותר לצרכי הלקוח.הבדיקה כוללת את עלויות דמי הניהול, כאשר במקרים רבים אנו מגלים שחיקה של עשרות אלפי שקלים לגיל פרישה. 
          </Text>
        </View>

        <View style={textBlock}>
          <Text style={text}>
          מתי מומלץ לבצע בדיקה של תיק הביטוח?מרבית המבוטחים אינם מבצעים מעקב אחר עלויות הביטוח אשר הם משלמים ואינם מספיק מקצועיים לבצע שינויים בתיק כאשר יש שינוי במצב המשפחתי ולכן מומלץ לבצע בדיקה פעם בשנתיים עד שלוש שנים. כאשר המטרה היא להבטיח שמרכיבי התיק מספקים את התנאים האופטימליים ללקוח ולבני משפחתו.אנו דואגים לבצע בדיקה לכל לקוחותינו באופן יזום אחד לשנתיים ובכך מבטיחים ללקוחותינו שקט נפשי.
          </Text>
        </View>

        <View style={textBlock}>
          <Text style={text}>
           להלן מספר כתבות בנושא:
          </Text>
        </View>

        <View style={videoContainer}>
        <TouchableOpacity onPress={this.open1Video}>
          <ImageBackground source={require('./preview/pr_1.png')} style={iconTextCintainer}>
              <View style={styles.icon}>{myIcon}</View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.open2Video}>
        <ImageBackground source={require('./preview/pr_2.png')} style={iconTextCintainer}>
              <View style={styles.icon}>{myIcon}</View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.open3Video}>
        <ImageBackground source={require('./preview/pr_3.png')} style={iconTextCintainer}>
              <View style={styles.icon}>{myIcon}</View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.open4Video}>
        <ImageBackground source={require('./preview/pr_4.png')} style={iconTextCintainer}>
              <View style={styles.icon}>{myIcon}</View>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBlock:{
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    textAlign: 'right'
  },
  container:{
    flex:1, 
    backgroundColor: '#fff',
  },
  videoContainer:{
    backgroundColor:'#fff',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textVideoLink:{
    fontSize:25
  },
  iconTextCintainer:{
    width:w / 2.4,
    height: h / 4,
    margin: 10,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});