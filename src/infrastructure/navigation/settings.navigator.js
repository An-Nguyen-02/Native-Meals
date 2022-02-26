import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';
const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'none',
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
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
