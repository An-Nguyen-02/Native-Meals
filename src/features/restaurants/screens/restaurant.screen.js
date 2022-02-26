import React, { useContext, useState } from 'react';
import { Search } from '../components/search.component';
import { View, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../../../components/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FavoriteBar } from '../../../components/favorite/favorite-bar.component';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { RestaurantList } from '../components/restaurant-list.styles';
import { FadeInView } from '../../../components/animations/fade.animation';
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setisToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.purple300} />
        </LoadingView>
      )}
      <Search
        isFavoriteToggled={isToggled}
        onFavoriteToggle={() => setisToggled(!isToggled)}
      />
      {isToggled && (
        <FavoriteBar favorites={favorites} onDetail={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetails', { restaurant: item })
              }
            >
              <FadeInView>
                <RestaurantInfoCard
                  restaurant={item}
                  onDetail={navigation.navigate}
                />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
