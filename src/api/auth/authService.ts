import { baseApi } from '../baseApi';
import { WithdrawRequest, WithdrawResponse } from './types';

export const authService = {
  // 회원 탈퇴
  postWithdraw: async (body: WithdrawRequest): Promise<WithdrawResponse> => {
    const response = await baseApi.post('auth/withdrawal', {
      body: JSON.stringify(body),
    });
    return response.json();
  },
};
