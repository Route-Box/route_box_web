export interface Notification {
  id: number;
  content: string;
  date: string;
  isRead: boolean;
}

export interface UnreadNotificationResponse {
  hasUnreadNotification: boolean;
}

export interface NotificationsResponse {
  notifications: Notification[];
}
