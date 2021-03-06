import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  /* Because status bar only use on Android, do the followed */
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
