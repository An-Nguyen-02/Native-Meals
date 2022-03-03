import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { View } from 'react-native';
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariant = {
  top: 'marginTop',
  right: 'marginRight',
  bottom: 'marginBottom',
  left: 'marginLeft',
};

const getVariant = (position, size, theme) => {
  const pos = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const sizeValue = theme.space[sizeIndex];
  return `${pos}:${sizeValue}`;
};
const SpacerView = styled(View)`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
