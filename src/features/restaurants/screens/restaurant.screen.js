import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
const SearchView = styled(View)`
  justify-content: center;
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <FlatList
        data={restaurantsContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
