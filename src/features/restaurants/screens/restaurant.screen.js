import React from 'react';
import { List, Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  /* Because status bar only use on Android, do the followed */
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;
const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaContainer>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeAreaContainer>
  );
};
