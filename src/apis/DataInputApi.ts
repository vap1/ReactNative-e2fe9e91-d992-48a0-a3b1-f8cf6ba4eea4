
import { DataInputRequest, DataInputResponse } from '../types/UserTypes';

const dataInputApi = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await fetch('/data-input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Data input failed');
    }

    const data: DataInputResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Data input failed');
  }
};

export default dataInputApi;