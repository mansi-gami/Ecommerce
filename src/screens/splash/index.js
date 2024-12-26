import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('SignIn');
  }, 2000);
  return (
    <ImageBackground
      source={require('../../assets/wallpaper.jpeg')}
      resizeMode={'cover'}
      style={{flex: 1, padding: 15}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Ecommerce App
      </Text>
    </ImageBackground>
  );
}
