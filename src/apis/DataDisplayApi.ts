
import { DataDisplayRequest, DataDisplayResponse } from '../types/UserTypes';

const dataDisplayApi = async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
  try {
    const response = await fetch('/data-display', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Data display failed');
    }

    const data: DataDisplayResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Data display failed');
  }
};

export default dataDisplayApi;