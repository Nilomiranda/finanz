import styled from 'styled-components/native';
// @ts-ignore
import React from 'react';

const InputWrapper = styled.View``;

const InputField = styled.TextInput`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 10px;
`;

const InputLabel = styled.Text`
  margin-bottom: 4px;
`;

type InputType = 'text' | 'password';

interface InputProps {
  type?: InputType;
  label?: string;
}

const Input = ({ label, type }: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputField secureTextEntry={type === 'password'} />
    </InputWrapper>
  );
};

export default Input;
