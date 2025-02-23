import { baseApi } from '../baseApi';
import {
  GetInquiryResponse,
  GetInquiryDetailResponse,
  CreateInquiryRequest,
  CreateInquiryResponse,
} from './types';

export const inquiryService = {
  // 문의 목록 조회
  getInquiries: async (): Promise<GetInquiryResponse> => {
    const response = await baseApi.get('inquiries');
    return response.json();
  },

  // 문의 상세 조회
  getInquiryDetail: async (inquiryId: number): Promise<GetInquiryDetailResponse> => {
    const response = await baseApi.get(`inquiries/${inquiryId}`);
    return response.json();
  },

  // 문의 생성
  createInquiry: async (data: CreateInquiryRequest): Promise<CreateInquiryResponse> => {
    const formData = new FormData();
    formData.append('content', data.content);
    formData.append('inquiryType', data.inquiryType);

    if (Array.isArray(data.images) && data.images.length > 0) {
      data.images.forEach((image) => {
        formData.append('images', image);
      });
    }

    const response = await baseApi.post('inquiries', {
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.json();
  },
};
