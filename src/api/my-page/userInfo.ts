import { baseApi } from '../baseApi';
import { MyInfoResponse, RootObject, UserProfileResponse } from './types';

export const userInfo = {
  getMyProfile: async (): Promise<UserProfileResponse> => {
    const response = await baseApi.get('users/me/profile');
    return response.json();
  },

  getUserPurchasedRoutes: async (): Promise<RootObject> => {
    const response = await baseApi.get('users/me/purchased-routes');
    return response.json();
  },

  patchUserInfo: async (data: MyInfoResponse): Promise<MyInfoResponse> => {
    const response = await baseApi.patch('users/me', { json: data });
    return response.json();
  },
};
