import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
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
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: 'AIzaSyC_WLXubFgTIqZYOCwd_yEpu4D-l5XaZK4',
  authDomain: 'nativemeals-2a57b.firebaseapp.com',
  projectId: 'nativemeals-2a57b',
  storageBucket: 'nativemeals-2a57b.appspot.com',
  messagingSenderId: '1054335853428',
  appId: '1:1054335853428:web:0e36649f19d9d4fdae8221',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
