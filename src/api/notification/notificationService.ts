import { baseApi } from '../baseApi';
import { UnreadNotificationResponse, NotificationsResponse } from './types';

export const notificationService = {
  // 안읽은 알림 여부 조회
  hasUnreadNotification: async (): Promise<UnreadNotificationResponse> => {
    const response = await baseApi.get('notifications/unread');
    return response.json();
  },

  // 알림 내역 조회
  getNotifications: async (): Promise<NotificationsResponse> => {
    const response = await baseApi.get('notifications');
    return response.json();
  },
};
