import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';
const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Setting"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
