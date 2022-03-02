import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './restaurants.navigator';
import React from 'react';
import { MapScreen } from '../../features/map/screen/map.screen';
import { CheckoutScreen } from '../../features/checkout/screen/checkout.screen';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { SettingsNavigator } from './settings.navigator';
import { CartContextProvider } from '../../services/cart/cart.context';

const Tab = createBottomTabNavigator();
const IconOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Map') {
      iconName = focused ? 'map' : 'map-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings' : 'settings-outline';
    } else if (route.name === 'Restaurants') {
      iconName = focused ? 'restaurant' : 'restaurant-outline';
    } else if (route.name === 'Checkout') {
      iconName = focused ? 'cart' : 'cart-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
});

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={IconOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Checkout" component={CheckoutScreen} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
