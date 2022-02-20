import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../typography/text.component';
import { Spacer } from '../spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { ScrollView, TouchableOpacity } from 'react-native';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoriteBar = ({ favorites, onDetail }) => {
  if (!favorites.length) {
    return (
      <Spacer variant="left.large">
        <Text variant="error">You don't have any favorites</Text>
      </Spacer>
    );
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onDetail('RestaurantDetails', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
