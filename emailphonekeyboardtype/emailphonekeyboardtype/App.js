import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';

const PasswordInputExample = () => {
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')



const handleSubmit = () =>  {
  Alert.alert ('Submitted Text: ', text)
}

  return(
    <View style = {styles.container}>   
      <TextInput
      style = {styles.input}
      placeholder = "Enter Email "
       keyboardType = "Enter Address"
      onChangeText = {(value) => setEmail(value)}
      />

       <TextInput
      style = {styles.input}
      placeholder = "Enter Phone Number "
       keyboardType = "phone-pad"
      onChangeText = {(value) => setPhone(value)}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input : {
    height : 40,
    borderWidth: 1,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
export default PasswordInputExample;