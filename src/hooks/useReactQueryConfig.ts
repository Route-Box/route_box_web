import { QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

/**
 * React Query 설정을 위한 커스텀 훅
 *
 * @returns {QueryClient} 설정된 QueryClient 인스턴스
 */
export const useReactQueryConfig = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        gcTime: 1000 * 60 * 60 * 24, // 24시간 동안 비활성 쿼리 데이터 유지
      },
      mutations: {
        onError: (error) => {
          toast.error(error instanceof Error ? error.message : '오류가 발생했습니다.');
        },
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        console.log(error);
        toast.error(error instanceof Error ? error.message : '오류가 발생했습니다.');
      },
    }),
  });

  return queryClient;
};
