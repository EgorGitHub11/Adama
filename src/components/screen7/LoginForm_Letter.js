import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';


export default class LoginFormLetter extends Component {
  constructor(props){
    super(props)
    this.onFetchLetter = this.onFetchLetter.bind(this)
    this.state={
      name: "",
      phoneNumber: "",
      errors: {},
    }
  }

  handleValidation(){
    let errors = {} 
    let fieldName = this.state.name
    
    if(fieldName === null){
        alert('Input cant be empty')
    }
  }

  async onFetchLetter(){
    var data = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber
    };
    try {
        let response = await fetch(
            "https://appadama.herokuapp.com/letter",
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
            console.log(response)
            this.props.navigation.navigate('HomeScreen')
            alert('Succsessfull!')
          },1000)
    }
    } catch (errors) {
        alert(errors);
      } 
   }

  render() {
    const {input, container, buttonContainer, buttonText, title} = styles
    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
        <ScrollView>
          <TextInput 
          placeholder='שם'
          onChangeText={text => this.setState({ name: text })}
          style={input}/>

          <TextInput 
          onChangeText={text => this.setState({ phoneNumber: text })}
          placeholder='טלפו'
          style={input}/>

          <TouchableOpacity onPress={this.onFetchLetter}
          style={buttonContainer}>
            <Text style={buttonText}>
            צרו איתי קשר
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
      margin: 20,
      direction: 'rtl',
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      color: '#000',
      paddingHorizontal: 10,
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
      marginLeft: 20,
    }
});