import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import { LocationContext } from '../../../services/location/location.context';
const SearchView = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 40px;
  z-index: 100;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        icon="map"
      />
    </SearchView>
  );
};
