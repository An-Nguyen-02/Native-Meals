import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import { LocationContext } from '../../../services/location/location.context';
const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavoriteToggled, onFavoriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchView>
      <Searchbar
        icon={isFavoriteToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoriteToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
