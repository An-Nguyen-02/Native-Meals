import React from 'react';
import { Spacer } from '../../../components/spacer.component';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';
import LottieView from 'lottie-react-native';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Native Meals</Title>
      <AccountContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
