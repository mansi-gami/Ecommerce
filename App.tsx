import React from 'react';

import SignUpScreen from './src/screens/signup';
import SignInScreen from './src/screens/signin';
import SplashScreen from './src/screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name={'Splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'SignIn'}
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name={'SignUp'}
            component={SignUpScreen}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
