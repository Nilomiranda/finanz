import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../modules/auth/SignInScreen';
import SignUpScreen from '../modules/auth/SignUpScreen';
import ForgotPasswordScreen from '../modules/auth/ForgotPasswordScreen';
import AuthChoiceScreen from '../modules/auth/AuthChoiceScreen';
import BackButton from '../components/navigators/BackButton';

export type MainStackParamList = {
  AuthChoiceScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthChoiceScreen"
        component={AuthChoiceScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={(props) => ({
          title: '',
          headerLeft: () => <BackButton navigation={props.navigation} />,
        })}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
