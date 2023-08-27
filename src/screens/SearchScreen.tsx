
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { User } from '../types/UserTypes';
import SearchApi from '../apis/SearchApi';
import SearchResults from '../components/SearchResults';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState('');

  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await SearchApi.search({ keyword });
      setSearchResults(response.searchResults);
    } catch (error) {
      Alert.alert('Error', 'Failed to perform search');
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