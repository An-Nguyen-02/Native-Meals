import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
const isAndroid = Platform.OS === 'android';
export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_view}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list_view}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search_view: {
    justifyContent: 'center',
    padding: 16,
  },
  list_view: {
    flex: 1,
    padding: 16,
  },
});
