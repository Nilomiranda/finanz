import React from 'react';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import Margin from '../../components/Margin';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 45px;
`;

const AuthChoiceScreen = ({ navigation }: { navigation: any }) => {
  const handleGoToSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <Container>
      <Margin margin={{ bottom: 35 }}>
        <Button onPress={handleGoToSignIn}>Sign In</Button>
      </Margin>
      <Button appearance="secondary">Create Account</Button>
    </Container>
  );
};

export default AuthChoiceScreen;
