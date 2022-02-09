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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
