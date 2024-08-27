import { baseApi } from '../baseApi';
import { RootObject, UserProfileResponse } from './types';

export const userInfo = {
  getUserProfile: async (): Promise<UserProfileResponse> => {
    const response = await baseApi.get('users/me/profile');
    return response.json();
  },

  getUserPurchasedRoutes: async (): Promise<RootObject> => {
    const response = await baseApi.get('users/me/purchased-routes');
    return response.json();
  },
};
