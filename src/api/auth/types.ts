export interface WithdrawResponse {
  userId: number;
}

export interface WithdrawRequest {
  reasonType: string;
  reasonDetail: string;
}
