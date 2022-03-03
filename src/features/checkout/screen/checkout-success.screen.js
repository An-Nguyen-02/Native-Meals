import React from 'react';
import { SafeArea } from '../../../components/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
