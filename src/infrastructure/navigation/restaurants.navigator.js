import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Platform } from 'react-native';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={
        Platform.OS === 'ios'
          ? { ...TransitionPresets.ModalPresentationIOS, headerShown: false }
          : { ...TransitionPresets.RevealFromBottomAndroid, headerShown: false }
      }
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
