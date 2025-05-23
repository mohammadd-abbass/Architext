import axios from 'axios';
import { cleanCodeResponse } from '../utils/cleanCode';

export const callFlaskAPI = async (route: string, payload: any) => {
    try {
        const response = await axios({
            method: 'post',
            url: `http://localhost:5000/ai/${route}`,
            headers: {
              'Content-Type': 'application/json'
            },
            data: payload
          });

          return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Request failed: ${error.response?.status} - ${error.message}`);
          }
          throw new Error(`Request failed: ${error}`);
    }
};