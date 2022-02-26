import React, { useContext, useState } from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/text.component';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large">
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry
            secure
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        <Spacer size="large">
          <Text variant="error">{error[0]}</Text>
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Log In
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
