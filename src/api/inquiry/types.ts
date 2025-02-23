export interface Inquiry {
  inquiryId: number;
  content: string;
  status: string;
}

export interface GetInquiryResponse {
  inquiries: Inquiry[];
}

export interface GetInquiryDetailResponse {
  inquiryId: number;
  userId: number;
  type: string;
  content: string;
  status: string;
  reply?: string;
  imageUrls?: string[];
}

export interface CreateInquiryRequest {
  content: string;
  inquiryType: string;
  images?: File[];
}

export interface CreateInquiryResponse {
  inquiryId: number;
}
