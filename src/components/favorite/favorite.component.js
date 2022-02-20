import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
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
      onClick={() =>
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
