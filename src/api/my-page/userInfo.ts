import { baseApi } from '../baseApi';
import { UserProfileResponse } from './types';

export const userInfo = {
  getUserProfile: async (): Promise<UserProfileResponse> => {
    const response = await baseApi.get('users/me/profile');
    return response.json();
  },
};
