import React from 'react';
import styled from 'styled-components/native';
import ArrowBack from '../../../assets/icons/arrow_back.svg';
import { Text, View } from 'react-native';

const BackButton = () => {
  return (
    <View>
      <ArrowBack width={30} height={30} fill="black" />
    </View>
  );
};

export default BackButton;
