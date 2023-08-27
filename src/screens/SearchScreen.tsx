
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { User } from '../types/UserTypes';
import { searchApi } from '../apis/SearchApi';
import SearchResults from '../components/SearchResults';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await searchApi({ keyword });
      setSearchResults(response.searchResults);
    } catch (error) {
      Alert.alert('Error', 'Failed to perform search');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      <SearchResults searchResults={searchResults} />
    </View>
  );
};

export default SearchScreen;