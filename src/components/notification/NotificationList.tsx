import styled from 'styled-components';
import Typography from '@/components/common/Typography';
import { useQuery } from '@tanstack/react-query';
import { notificationService } from '@/api/notification/notificationService';
import { Notification, NotificationsResponse } from '@/api/notification/types';
import Loader from '../common/Loader';
import NotificationBase from '@/assets/png/notification.png';

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

const NoData = styled.div`
  margin-top: 9rem;
  align-self: center;
  text-align: center;
  img {
    width: 3.75rem;
    height: 3.75rem;
  }
`;

const NotificationList: React.FC = () => {
  const { data, isLoading } = useQuery<NotificationsResponse>({
    queryKey: ['notifications'],
    queryFn: notificationService.getNotifications,
  });

  if (isLoading) return <Loader />;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = date.toLocaleString('ko-KR', { weekday: 'short' });
    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}(${weekday})`; // 형식 변경
  };

  const groupNotificationsByDate = () => {
    const grouped: { [key: string]: Notification[] } = {};

    data?.notifications.forEach((notification) => {
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
              {notification.content}
            </Typography>
          ))}
        </TodaySection>
      )}

      {Object.entries(groupedNotifications).map(
        ([date, notifications]) =>
          date !== '오늘' && (
            <NotificationGroup key={date}>
              <Typography variant="Title_XL">{formatDate(date)}</Typography> {/* 날짜 형식 적용 */}
              <NotificationItemGroup>
                {notifications.map((notification) => (
                  <NotificationItem key={notification.id}>{notification.content}</NotificationItem>
                ))}
              </NotificationItemGroup>
            </NotificationGroup>
          )
      )}

      {data?.notifications.length === 0 && (
        <NoData>
          <img src={NotificationBase} />
          <Typography variant="Body_B_M" color="#70747E">
            받은 알림이 없습니다.
          </Typography>
        </NoData>
      )}
    </Container>
  );
};

export default NotificationList;
