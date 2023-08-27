
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/UserTypes';

type SearchResultsProps = {
  searchResults: User[];
};

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <View>
      <Text>Search Results:</Text>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <View>
            <Text>User ID: {item.userId}</Text>
            <Text>First Name: {item.firstName}</Text>
            <Text>Last Name: {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchResults;