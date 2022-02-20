import React, { useState } from 'react';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/safe-area.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExapanded, setBreakfastExpanded] = useState(false);
  const [lunchExapanded, setlunchExpanded] = useState(false);
  const [dinnerExapanded, setDinnerExpanded] = useState(false);
  const [drinkExapanded, setDrinkExpanded] = useState(false);
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
    </SafeArea>
  );
};
