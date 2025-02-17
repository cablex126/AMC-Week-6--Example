import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';

const HandleInputExample = () => {
  const [text, setText] = useState('')

  const handleSubmit = () =>{
    Alert.alert ('Submitted Text:', text)
  }

  return(
    <View style = {styles.container}>
     <TextInput
     style={styles.input} 
     placeholder="Press Enter after typing..."
     onChangeText = {(value) => setText(value)}
     returnKeyType="done"
     onSubmitEditing={handleSubmit}
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
    height: 40,
    borderWidth: 1,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  displayText: {
    marginTop: 10,
    fontSize: 10,
  }


});

export default HandleInputExample;