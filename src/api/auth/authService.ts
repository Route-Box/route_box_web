import { baseApi } from '../baseApi';
import { WithdrawResponse } from './types';

export const authService = {
  // 회원 탈퇴
  postWithdraw: async (): Promise<WithdrawResponse> => {
    const response = await baseApi.post('auth/withdraw');
    return response.json();
  },
};
