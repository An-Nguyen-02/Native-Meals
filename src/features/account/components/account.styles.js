import styled from 'styled-components';
import { ImageBackground, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
export const AccountBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/bg-home.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
