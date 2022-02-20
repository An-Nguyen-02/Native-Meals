import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const jsonVal = JSON.stringify(value);
      await AsyncStorage.setItem('@favorites', jsonVal);
    } catch (error) {
      console.log('error saving');
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites');
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log('error loading');
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const updateFavorites = favorites.filter(
      (curr_res) => curr_res.placeId !== restaurant.placeId
    );
    setFavorites(updateFavorites);
  };
  useEffect(() => {
    loadFavorites();
  }, []);
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addFavorite: add,
        removeFavorite: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
