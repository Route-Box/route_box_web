import { baseApi } from '../baseApi';
import { MyInfoRequest, MyInfoResponse, RootObject, UserProfileResponse } from './types';

export const queryKey = {
  userProfile: 'userProfile',
};

export const userInfo = {
  getUserProfile: async (): Promise<UserProfileResponse> => {
    const response = await baseApi.get('users/me/profile');
    return response.json();
  },

  getUserPurchasedRoutes: async (): Promise<RootObject> => {
    const response = await baseApi.get('users/me/purchased-routes');
    return response.json();
  },

  patchUserInfo: async (data: MyInfoRequest): Promise<MyInfoResponse> => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'profileImage' && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      }
    });
    const response = await baseApi.patch('users/me', { body: formData });

    return response.json();
  },
};
