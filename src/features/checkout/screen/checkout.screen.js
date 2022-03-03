import React, { useContext, useState } from 'react';
import { CreditCardInput } from '../components/credit-card.component';
import { SafeArea } from '../../../components/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer.component';
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from '../components/checkout.styles.js';
import { CartContext } from '../../../services/cart/cart.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { payRequest } from '../../../services/checkout/checkout.service';
export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate('CheckoutError', {
        error: 'Make sure the credit card information is valid',
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        navigation.navigate('CheckoutSuccess');
        clearCart();
      })
      .catch((error) => {
        setIsLoading(false);
        navigation.navigate('CheckoutError', {
          error: error,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Text>Your order</Text>
          <List.Section>
            {cart.map(({ item, price }, index) => {
              return (
                <List.Item
                  title={`${item} - ${price / 100}`}
                  key={`${item}-${index}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput label="Name" value={name} onChangeText={(t) => setName(t)} />
        {name.length > 0 && (
          <CreditCardInput
            name={name}
            onSuccess={(user_card) => setCard(user_card)}
            onError={() => {
              navigation.navigate('CheckoutError', {
                error: 'Something went wrong processing your credit card',
              });
            }}
          />
        )}
        <Spacer position="top" size="xxl" />
        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay Now
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
        >
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
