import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';
import { FavoritesContenxtProvider } from './src/services/favorites/favorites.context';
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
        <FavoritesContenxtProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContenxtProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
