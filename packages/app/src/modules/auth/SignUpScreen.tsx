import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Margin from '../../components/Margin';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { LinkText } from '../../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigators/MainStack';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 10px 50px;
`;

type SignUpScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'SignUpScreen'
>;

const SignUpScreen = ({
  navigation,
}: {
  navigation: SignUpScreenNavigationProp;
}) => {
  return (
    <Container>
      <Margin margin={{ top: 0, bottom: 30 }}>
        <Input label="Email" />
      </Margin>
      <Margin margin={{ top: 0, bottom: 30 }}>
        <Input label="Name" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <Input label="Password" type="password" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <Input label="Confirm password" type="password" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <LinkText>Already have an account? Sign in</LinkText>
        </TouchableOpacity>
      </Margin>
      <Margin>
        <Button>
          <Text>Create account</Text>
        </Button>
      </Margin>
    </Container>
  );
};

export default SignUpScreen;
