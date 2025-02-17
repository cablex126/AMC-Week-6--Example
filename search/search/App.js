import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const InputwithIcon = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
    <Ionicons name = "search" size = {20} color = "gray" />
      <TextInput
        style={styles.input}
        placeholder="Search... "
        onChangeText={(text) => setSearch(value)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth : 1,
    borderRadius : 10,
    paddingHorizontal : 10,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
  },
  icon : {
    marginRight: 10,
  }
});

export default InputwithIcon;
