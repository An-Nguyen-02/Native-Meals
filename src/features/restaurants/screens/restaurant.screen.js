import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
const SearchView = styled(View)`
  justify-content: center;
  padding-bottom: ${(props) => props.theme.space[1]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.purple300} />
        </LoadingView>
      )}
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
