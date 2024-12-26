import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function InputFieldComp({placeholder, keyboardType = 'default', secureTextEntry = false}) {
  return (
    <View
      style={{
        borderBottomColor: '#EAECEE',
        borderBottomWidth: 1,
        marginBottom: 10,
      }}>
      <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
    </View>
  );
}
