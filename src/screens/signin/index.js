import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import RoundButtonComp from '../../components/RoundButtonComp';
import FullRoundButtonComp from '../../components/FullRoundButtonComp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { _signInWithGoogle } from '../../config/firebase/GoogleSignin';

export default function SignInScreen({navigation}) {

  async function googleSignIn () {
    _signInWithGoogle().then(data => {
      if(!data){
        console.log('=>Error','No Data')
        return
      }
      console.log('=>Success', data);
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={{flex: 0.5}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/login1.jpeg')}
        />
      </View>
      <View style={{flex: 0.5, backgroundColor: '#ffffff'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Hello
        </Text>
        <Text style={{textAlign: 'center'}}>Welcome to our Ecommerce App</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <RoundButtonComp label={'Login'} width={150}/>
          <RoundButtonComp label={'Sign Up'} width={150} border={true} onPress={()=> navigation.navigate('SignUp')}/>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'flex-end',

            flex: 1,
            paddingBottom: 30,
          }}>
          <Text style={{textAlign: 'center', marginTop: 20}}>
            Or via social media account
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <FullRoundButtonComp
              image={require('../../assets/facebook.png')}
              bg={'#2d75eB'}
            />
            <FullRoundButtonComp
              image={require('../../assets/google.png')}
              bg={'#e54545'}
              onPress={() => googleSignIn()}
            />
            <FullRoundButtonComp
              image={require('../../assets/linkdIn.png')}
              bg={'#02217d'}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
