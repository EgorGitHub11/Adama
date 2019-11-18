import React, { Component } from 'react';
import { View, Button, Linking, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, ToastAndroid, Keyboard} from 'react-native';

export default class LoginFormRetiredInsurance extends Component {
  constructor(props) {
    super(props)
    this.onFetchLoginRecords = this.onFetchLoginRecords.bind(this)
    this.signInLink = this.signInLink.bind(this)
    this.validate = this.validate.bind(this)
    this.state = {
       name: "",
       surname: "",
       passportId: "",
       dateIssue: "",
       phoneNumber: ""
    };
  };

  signInLink = (url) => {
    url = 'https://cloud.atidsm.co.il/AtidNet/AdamaNET/Login.aspx?ReturnUrl=%2fAtidNet%2fAdamaNET%2f'
   return(
     Linking.openURL(url).catch(err => console.error('An error occurred', err))
   )
  }

     async onFetchLoginRecords(){
      var data = {
      name: this.state.name,
      surname: this.state.surname,
      passportId: this.state.passportId,
      dateIssue: this.state.dateIssue,
      phoneNumber: this.state.phoneNumber
      };
      try {
      let response = await fetch(
      "https://appadama.herokuapp.com/register",
      {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      }
      );
      if (response.status >= 200 && response.status < 300) {
          setTimeout( () => {
            this.signInLink()
          },1000)
      }
      } catch (errors) {
     
      alert(errors);
      } 
     }

     validate (){
      //include your validation inside if condition
      if (this.state.name.length != 0 && this.state.phoneNumber.length != 0, this.state.passportId.length != 0, this.state.dateIssue.length != 0, this.state.surname.length != 0) {
         ToastAndroid.show("Success", ToastAndroid.SHORT)
         return this.onFetchLoginRecords()
        } 
      else {
          Keyboard.dismiss();
          ToastAndroid.show("Empty field, try again", ToastAndroid.SHORT)
      }
  }

  render() {
    const {input, container, buttonContainer, buttonText, title} = styles
    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <Text style={title}>ל מנת להמשיך את התהליך יש להזין:</Text>
        <ScrollView>
          <TextInput 
          placeholder='שם פרטי'
          onChangeText={text => this.setState({ name: text })}
          onSubmitEditing={() => this.dateInput.focus()}
          style={input}/>

          <TextInput 
          placeholder='שם משפחה'
          onChangeText={text => this.setState({ surname: text })}
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.dateInput = input}
          style={input}/>

          <TextInput 
          placeholder='ת"ז'
          onChangeText={text => this.setState({ passportId: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

          <TextInput 
          placeholder="תאריך הנפקה ת''ז"
          onChangeText={text => this.setState({ dateIssue: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

          <TextInput 
          placeholder='טלפון'
          onChangeText={text => this.setState({ phoneNumber: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

    

          <TouchableOpacity
           onPress={this.validate}  
          style={buttonContainer}>
            <Text style={buttonText}>
            כניסה
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      padding: 20,
    },
    input:{
      height: 40,
      margin: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      color: '#000',
      paddingHorizontal: 10,
      direction: "rtl",
    },
    buttonContainer:{
      marginTop: 10,
      backgroundColor: '#528156',
      paddingVertical: 15,
      shadowColor: '#000',
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      elevation: 3,
      marginBottom: 10
    },
    buttonText:{
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700'
    },
    title:{
      fontSize: 20,
      color: '#528156',
      marginRight: 10,
    }
});