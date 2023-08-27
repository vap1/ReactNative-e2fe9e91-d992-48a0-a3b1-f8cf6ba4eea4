
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      <SearchResults searchResults={searchResults} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;