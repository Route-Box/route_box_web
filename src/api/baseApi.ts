import ky from 'ky';
import { ErrorResponse } from '@/types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const baseApi = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        if (Math.random() < import.meta.env.VITE_ERROR_RATE) {
          throw new Response(JSON.stringify({ message: 'Simulated failure response' }), {
            status: 500,
            statusText: 'Internal Server Error',
          });
        }
      },
    ],
    beforeError: [
      async (error) => {
        const { response } = error;
        if (response && response.body) {
          try {
            const errorData: ErrorResponse = await response.json();
            error.message = errorData.message || `${response.status} ${response.statusText}`;
          } catch {
            error.message = `${response.status} ${response.statusText}`;
          }
        }
        return error;
      },
    ],
  },
});
