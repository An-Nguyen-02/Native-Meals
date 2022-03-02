import React, { useState, useContext } from 'react';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/safe-area.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Spacer } from '../../../components/spacer.component';
import { CartContext } from '../../../services/cart/cart.context';
import { OrderButton } from '../components/restaurant-list.styles';

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [breakfastExapanded, setBreakfastExpanded] = useState(false);
  const [lunchExapanded, setlunchExpanded] = useState(false);
  const [dinnerExapanded, setDinnerExpanded] = useState(false);
  const [drinkExapanded, setDrinkExpanded] = useState(false);
  const { addToCart } = useContext(CartContext);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExapanded}
            onPress={() => setBreakfastExpanded(!breakfastExapanded)}
          >
            <List.Item title="Classic Breakfast" />
            <List.Item title="Pancake" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExapanded}
            onPress={() => setlunchExpanded(!lunchExapanded)}
          >
            <List.Item title="Hamburger" />
            <List.Item title="Egg Sandwich" />
            <List.Item title="Mixed Salad" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExapanded}
            onPress={() => setDinnerExpanded(!dinnerExapanded)}
          >
            <List.Item title="Pizza" />
            <List.Item title="Seafood" />
            <List.Item title="Fried Chicken" />
          </List.Accordion>
          <List.Accordion
            title="Drink"
            left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
            expanded={drinkExapanded}
            onPress={() => setDrinkExpanded(!drinkExapanded)}
          >
            <List.Item title="Cocktail" />
            <List.Item title="Pepsi" />
            <List.Item title="Water" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: 'special', price: 1499 }, restaurant);
            navigation.navigate('Checkout');
          }}
        >
          Order Special Only 14.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
