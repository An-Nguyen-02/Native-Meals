import React, { useContext, useState } from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/text.component';
import { ActivityIndicator, Colors } from 'react-native-paper';
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Native Meals</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>

        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={(text) => setRepeatedPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          ) : (
            <AuthButton
              icon="account"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
