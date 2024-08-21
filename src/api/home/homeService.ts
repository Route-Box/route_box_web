import { baseApi } from '../baseApi';
import { RecommendRoutesResponse, PopularRoutesResponse } from './types';

export const homeService = {
  // 추천루트 조회
  getRecommendRoutes: async (): Promise<RecommendRoutesResponse> => {
    const response = await baseApi.get('routes/recommend');
    return response.json();
  },

  // 인기루트 조회
  getPopularRoutes: async (): Promise<PopularRoutesResponse> => {
    const response = await baseApi.get('routes/popular');
    return response.json();
  },
};
