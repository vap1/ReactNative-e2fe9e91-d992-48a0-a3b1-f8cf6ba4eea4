
import { SearchRequest, SearchResponse } from '../types/UserTypes';

const searchApi = async (request: SearchRequest): Promise<SearchResponse> => {
  try {
    const response = await fetch(`/search/${request.keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Search failed');
    }

    const data: SearchResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Search failed');
  }
};

export default searchApi;