import React from 'react';
import Input from '../../components/Input';
import styled from 'styled-components/native';
import Margin from '../../components/Margin';

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
      <Margin>
        <Input label="Password" type="password" />
      </Margin>
    </Container>
  );
};

export default SignInScreen;
