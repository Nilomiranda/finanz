import React from 'react';
import { View } from 'react-native';

interface MarginProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Margin = ({
  children,
  margin,
}: {
  children: React.ReactNode;
  margin?: MarginProps;
}) => {
  return (
    <View
      style={{
        marginTop: margin?.top || 0,
        marginBottom: margin?.bottom || 0,
        marginLeft: margin?.left || 0,
        marginRight: margin?.right || 0,
      }}
    >
      {children}
    </View>
  );
};

export default Margin;
