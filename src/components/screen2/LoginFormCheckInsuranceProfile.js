import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator, Keyboard, ToastAndroid} from 'react-native';
import Toast from 'react-native-tiny-toast'

export default class LoginFormCheckInsuranceProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      passportId: "",
      dateIssue: "",
      phoneNumber: "",
      onFetchCheck: ""
    }
  }
   
  componentDidMount(){
    this.onFetchCheck = async (toast) => {
    toast = Toast.showLoading('שולח...')
    var data = {
        passportId: this.state.passportId,
        dateIssue: this.state.dateIssue,
        phoneNumber: this.state.phoneNumber
    };
    try {
        let response = await fetch(
            "https://appadama.herokuapp.com/check",
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
            Toast.hide(toast)
            Toast.showSuccess("הפרטים נקלטו בהצלחה, נציג מהסוכנות יצור קשר תוך 24 שעות")
             this.props.navigation.navigate('Home')
          },1000)
    }
    } catch (errors) {
        alert(errors);
      } 
   }
  }


  validate = () => {
    if (this.state.passportId.length != 0 && this.state.dateIssue.length != 0, this.state.phoneNumber.length != 0) {
       return this.onFetchCheck()
      } 
    else {
        Keyboard.dismiss();
        Toast.show("נא למלא את כל השדות")
    }
}


  render() {
    const {input, container, buttonContainer, buttonText, title} = styles
    return (
      <KeyboardAvoidingView behavior="padding" style={container}>
         <Text style={title}>על מנת להמשיך את התהליך יש להזין:</Text>
        <ScrollView>
          <TextInput 
          placeholder= 'מספר ת"ז'
          onChangeText={text => this.setState({ passportId: text })}
          onSubmitEditing={() => this.dateInput.focus()}
          onChangeText={
            passportId => this.setState({passportId}) 
          }
          style={input}/>

          <TextInput 
          placeholder='תאריך הנפקה של ת"ז'
          onChangeText={text => this.setState({ dateIssue: text })}
          onSubmitEditing={() => this.phoneInput.focus()}
          ref={(input) => this.dateInput = input}
          style={input}/>

          <TextInput 
          placeholder='מספר טלפון'
          onChangeText={text => this.setState({ phoneNumber: text })}
          ref={(input) => this.phoneInput = input}
          style={input}/>

          <TouchableOpacity onPress={this.validate}
          style={buttonContainer}>
            <Text style={buttonText}>
            סיים
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
      marginRight: 20,
    }
});