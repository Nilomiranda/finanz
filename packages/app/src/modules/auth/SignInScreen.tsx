import React from 'react';
import Input from '../../components/Input';
import styled from 'styled-components/native';
import Margin from '../../components/Margin';
import Button from '../../components/Button';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 10px 50px;
`;

const SignInScreen = () => {
  return (
    <Container>
      <Margin margin={{ top: 0, bottom: 30 }}>
        <Input label="Email" />
      </Margin>
      <Margin margin={{ bottom: 30 }}>
        <Input label="Password" type="password" />
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
