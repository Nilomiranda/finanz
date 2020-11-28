import React from 'react';
import styled from 'styled-components/native';
import { HeaderBackButton } from '@react-navigation/stack';
import ArrowBack from '../../../assets/icons/arrow_back.svg';

const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const BackButton = ({ navigation }: { navigation: any }) => {
  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <ButtonWrapper onPress={handleNavigateBack}>
      <ArrowBack width={30} height={30} fill="black" />
    </ButtonWrapper>
  );
};

export default BackButton;
