import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Picker} from 'react-native';
// import Loader from '../uikit/Loader'

export default class LoginFormRetiredInsurance extends Component {
  constructor(props) {
    super(props)
    this.onFetchLoginRecords = this.onFetchLoginRecords.bind(this)
    this.state = {
       name: "",
       surname: "",
       passportId: "",
       dateIssue: "",
       phoneNumber: ""
    };
  };

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
            alert('sucsessfully!')
          },3000)
      }
      } catch (errors) {
     
      alert(errors);
      } 
     }


  render() {
    const {input, container, buttonContainer, buttonText, title} = styles
    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <Text style={title}>ל מנת להמשיך את התהליך יש להזין:</Text>
        <ScrollView>
          <TextInput 
          placeholder='*שם פרטי'
          onChangeText={text => this.setState({ name: text })}
          onSubmitEditing={() => this.dateInput.focus()}
          style={input}/>

          <TextInput 
          placeholder='*שם משפחה'
          onChangeText={text => this.setState({ surname: text })}
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.dateInput = input}
          style={input}/>

          <TextInput 
          placeholder='*ת"ז'
          onChangeText={text => this.setState({ passportId: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

          <TextInput 
          placeholder='*תאריך הנפקה ת"ז'
          onChangeText={text => this.setState({ dateIssue: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

          <TextInput 
          placeholder='*טלפון'
          onChangeText={text => this.setState({ phoneNumber: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

    

          <TouchableOpacity
           onPress={this.onFetchLoginRecords}  
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