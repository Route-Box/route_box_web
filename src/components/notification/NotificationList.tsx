import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@/components/common/Typography';

interface Notification {
  id: number;
  message: string;
  date: string;
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.38rem;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
`;

const TodaySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

const NotificationGroup = styled.div`
  display: flex;
  padding-top: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 100%;
  border-top: 1px solid var(--Gray5_outline, #d3d3d3);
`;

const NotificationItemGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`;

const NotificationItem = styled.p``;

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  React.useEffect(() => {
    // 더미 데이터
    const dummyNotifications: Notification[] = [
      { id: 1, message: '나의 새로운 루트가 완성되었어요.', date: '오늘' },
      { id: 2, message: "보라님이 나의 '경주 여행' 루트를 구매했어요.", date: '01-14(목)' },
      { id: 3, message: "'퍼플'님의 루트를 정상적으로 구매했어요.", date: '01-14(목)' },
      { id: 4, message: "보라님이 나의 '경주 여행' 루트를 구매했어요.", date: '01-13(수)' },
    ];
    setNotifications(dummyNotifications);
  }, []);

  const groupNotificationsByDate = () => {
    const grouped: { [key: string]: Notification[] } = {};
    notifications.forEach((notification) => {
      if (!grouped[notification.date]) {
        grouped[notification.date] = [];
      }
      grouped[notification.date].push(notification);
    });
    return grouped;
  };

  const groupedNotifications = groupNotificationsByDate();

  return (
    <Container>
      {groupedNotifications['오늘'] && (
        <TodaySection>
          <Typography variant="Title_XL">오늘</Typography>
          {groupedNotifications['오늘'].map((notification) => (
            <Typography variant="Body_R_M" key={notification.id}>
              {notification.message}
            </Typography>
          ))}
        </TodaySection>
      )}

      {Object.entries(groupedNotifications).map(
        ([date, notifications]) =>
          date !== '오늘' && (
            <NotificationGroup key={date}>
              <Typography variant="Title_XL">{date}</Typography>
              <NotificationItemGroup>
                {notifications.map((notification) => (
                  <NotificationItem key={notification.id}>{notification.message}</NotificationItem>
                ))}
              </NotificationItemGroup>
            </NotificationGroup>
          )
      )}
    </Container>
  );
};

export default NotificationList;
