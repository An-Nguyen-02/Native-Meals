import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import { LocationContext } from '../../../services/location/location.context';
const SearchView = styled(View)`
  justify-content: center;
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
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
      />
    </SearchView>
  );
};
