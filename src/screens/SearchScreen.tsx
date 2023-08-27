
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { User } from '../types/UserTypes';
import searchApi from '../apis/SearchApi';
import SearchResults from '../components/SearchResults';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await searchApi({ keyword });
      setSearchResults(response.searchResults);
    } catch (error) {
      // Handle error or show error message
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      <SearchResults searchResults={searchResults} />
    </View>
  );
};

export default SearchScreen;