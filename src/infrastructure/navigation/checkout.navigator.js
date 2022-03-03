import { CheckoutScreen } from '../../features/checkout/screen/checkout.screen';
import { CheckoutSuccessScreen } from '../../features/checkout/screen/checkout-success.screen';
import { CheckoutErrorScreen } from '../../features/checkout/screen/checkout-error.screen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator
    screenOptions={{
      headerMode: 'none',
    }}
  >
    <CheckoutStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
