import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Video from 'react-native-video';
import {h,w} from '../../../constants'
import Header from '../../uikit/Header'
import  Videos from '../../uikit/Video' 


export default class TestOneYearInf extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {textBlock, text, container} = styles
    return (
      <View style={container}>
        <Header/>
        <ScrollView>
        <View style={textBlock}>
          <Text style={text}>
          מהי בדיקת תיק ביטוח ומתי כדאי לבצע את הבדיקה? מדוע  בדיקת תיק ביטוח יכולה לשפר את תנאי הפוליסות השונות וגם לחסוך בכסף?בדיקת תיק הביטוח על ידי סוכן מקצועי נועדה לוודא שפוליסות הביטוח השונות מספקות את הכיסויים הביטוחיים, ומתאימות  ביותר לצרכי הלקוח.הבדיקה כוללת את עלויות דמי הניהול, כאשר במקרים רבים אנו מגלים שחיקה של עשרות אלפי שקלים לגיל פרישה. מתי מומלץ לבצע בדיקה של תיק הביטוח?מרבית המבוטחים אינם מבצעים מעקב אחר עלויות הביטוח אשר הם משלמים ואינם מספיק מקצועיים לבצע שינויים בתיק כאשר יש שינוי במצב המשפחתי ולכן מומלץ לבצע בדיקה פעם בשנתיים עד שלוש שנים. כאשר המטרה היא להבטיח שמרכיבי התיק מספקים את התנאים האופטימליים ללקוח ולבני משפחתו.אנו דואגים לבצע בדיקה לכל לקוחותינו באופן יזום אחד לשנתיים ובכך מבטיחים ללקוחותינו שקט נפשי.להלן מספר כתבות בנושא
          </Text>
        </View>
        </ScrollView>
        <Videos/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBlock:{
    margin: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
  },
  container:{
    flex:1, 
    backgroundColor: '#fff',
  },
});