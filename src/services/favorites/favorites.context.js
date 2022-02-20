import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const updateFavorites = favorites.filter(
      (curr_res) => curr_res.placeId !== restaurant.placeID
    );
    setFavorites(updateFavorites);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite: add,
        removeFavorite: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
