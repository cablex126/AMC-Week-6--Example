import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const BasicTextInput = () => {
  return(
    <View style = {styles.container}>
      <TextInput 
        style = {styles.input}
        placeholder="Type Here...."
      />
    </View>
  );
};

const styles = StyleSheet.create ({
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
  }



});






export default  BasicTextInput