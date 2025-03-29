export type InquiryStatus = 'ANSWERED' | 'PENDING';
export type InquiryType = 'ERROR' | 'USER_INFO' | 'ETC';

export interface Inquiry {
  inquiryId: number;
  content: string;
  status: InquiryStatus;
  createdAt: string;
}

export interface GetInquiryResponse {
  inquiries: Inquiry[];
}

export interface GetInquiryDetailResponse {
  inquiryId: number;
  userId: number;
  type: InquiryType;
  content: string;
  status: InquiryStatus;
  reply?: string;
  imageUrls?: string[];
}

export interface CreateInquiryRequest {
  content: string;
  inquiryType: InquiryType;
  images?: File[];
}

export interface CreateInquiryResponse {
  inquiryId: number;
}
