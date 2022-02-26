import React, { createContext, useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonVal = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonVal);
    } catch (error) {
      console.log('error saving');
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
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
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);
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
