import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import InputFieldComp from '../../components/InputFieldComp';
import RoundButtonComp from '../../components/RoundButtonComp';

export default function SignUpScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <StatusBar backgroundColor={'white'} />
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Sign Up
      </Text>
      <Text>SignUp Here</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <InputFieldComp placeholder={'email'} keyboardType={'email-address'} />
        <InputFieldComp placeholder={'password'} secureTextEntry={true} />
        <RoundButtonComp label={'signup'} marginTop={30}/>
      </View>
    </View>
  );
}
