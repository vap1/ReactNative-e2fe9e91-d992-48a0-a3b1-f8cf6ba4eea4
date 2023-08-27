
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/UserTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

const DataDisplayApi = {
  dataDisplay: async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/data-display`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve data for display');
    }
  },
};

export default DataDisplayApi;