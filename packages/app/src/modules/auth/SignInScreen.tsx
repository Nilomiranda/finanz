import React from 'react';
import Input from '../../components/Input';
import styled from 'styled-components/native';
import Margin from '../../components/Margin';
import Button from '../../components/Button';
import { Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigators/MainStack';
import { LinkText } from '../../styles';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 10px 50px;
`;

type SignInScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'SignInScreen'
>;

const SignInScreen = ({
  navigation,
}: {
  navigation: SignInScreenNavigationProp;
}) => {
  return (
    <Container>
      <Margin margin={{ top: 0, bottom: 30 }}>
        <Input label="Email" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <Input label="Password" type="password" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <LinkText>Don't have an account? Create one</LinkText>
        </TouchableOpacity>
      </Margin>
      <Margin>
        <Button>
          <Text>Sign In</Text>
        </Button>
      </Margin>
    </Container>
  );
};

export default SignInScreen;
