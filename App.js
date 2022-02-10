import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Text } from './src/components/typography/text.component';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
function MapScreen() {
  return (
    <SafeArea>
      <Text>Mapping!</Text>
    </SafeArea>
  );
}
function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();
const IconOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Map') {
      iconName = focused ? 'map' : 'map-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings' : 'settings-outline';
    } else if (route.name === 'Restaurants') {
      iconName = focused ? 'restaurant' : 'restaurant-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
});
export default function App() {
  let [oswaldLoeaded] = useOswald({
    Oswald_400Regular,
  });
  let [latodLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoeaded || !latodLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={IconOptions}>
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
