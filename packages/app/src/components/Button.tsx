import React from 'react';
import styled from 'styled-components/native';

type ButtonAppearance = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  appearance?: ButtonAppearance;
}

const StyledButton = styled.TouchableOpacity<{ appearance: ButtonAppearance }>`
  border-radius: 10px;
  padding: 20px 10px;
  background: ${({ appearance }) =>
    appearance === 'primary' ? 'black' : 'transparent'};
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLabel = styled.Text<{ appearance: ButtonAppearance }>`
  color: ${({ appearance }) => (appearance === 'primary' ? 'white' : 'black')};
  font-weight: bold;
  font-size: 16px;
`;

const Button = ({
  appearance = 'primary',
  children,
  onPress = () => null,
}: ButtonProps) => {
  return (
    <StyledButton appearance={appearance} onPress={onPress}>
      <ButtonLabel appearance={appearance}>{children}</ButtonLabel>
    </StyledButton>
  );
};

export default Button;
