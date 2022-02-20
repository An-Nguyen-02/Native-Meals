import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite ? addFavorite(restaurant) : removeFavorite(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  );
};
