
import axios from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/UserTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

export const dataInputApi = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/data-input`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to perform data input');
  }
};