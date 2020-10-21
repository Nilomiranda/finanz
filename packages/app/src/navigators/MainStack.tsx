import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../modules/auth/SignInScreen';
import SignUpScreen from '../modules/auth/SignUpScreen';
import ForgotPasswordScreen from '../modules/auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
