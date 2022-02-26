import React, { useContext } from 'react';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { SafeArea } from '../../../components/safe-area.component';
import styled from 'styled-components/native';
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer.component';
import { Text } from '../../../components/typography/text.component';
const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetails', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard
                  restaurant={item}
                  onDetail={navigation.navigate}
                />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text variant="error"> No favorites yet</Text>
    </NoFavoritesArea>
  );
};
