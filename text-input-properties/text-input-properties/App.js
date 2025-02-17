import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInputExample = () => {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Submitted Text:', Fname);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          onChangeText={(value) => setFname(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          onChangeText={(value) => setLname(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          keyboardType="numeric"
          onChangeText={(value) => setAge(value)}
        />
      </View>
      <Text style={styles.displayText}>Remaining {3 - age.length} Integers</Text>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <Text style={styles.displayText}>Password Length: {password.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '80%',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  displayText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PasswordInputExample;
