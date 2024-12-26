import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function RoundButtonComp({
  label,
  border = false,
  onPress,
  width = '100%',
  marginTop = 0,
}) {
  return (
    <TouchableOpacity style={{marginTop: 20}} onPress={() => onPress()}>
      <View
        style={{
          backgroundColor: border ? '#ffffff' : '#034ef7',
          width: width,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          marginLeft: 10,
          borderColor: 'Black',
          borderWidth: border ? 1 : 0,
        }}>
        <Text
          style={{
            color: border ? 'black' : 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
