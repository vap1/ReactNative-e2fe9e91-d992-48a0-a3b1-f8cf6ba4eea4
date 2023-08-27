
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/UserTypes';
import { search } from '../apis/SearchApi';

type SearchResultsProps = {
  keyword: string;
};

type SearchResultsState = {
  searchResults: User[];
  isLoading: boolean;
};

class SearchResults extends React.Component<SearchResultsProps, SearchResultsState> {
  constructor(props: SearchResultsProps) {
    super(props);
    this.state = {
      searchResults: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchSearchResults();
  }

  fetchSearchResults = async () => {
    try {
      const response = await search(this.props.keyword);
      this.setState({
        searchResults: response.searchResults,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  render() {
    const { searchResults, isLoading } = this.state;

    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Search Results:</Text>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.userId}
          renderItem={({ item }) => (
            <View>
              <Text>{item.firstName} {item.lastName}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone}</Text>
              <Text>Address: {item.address}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default SearchResults;