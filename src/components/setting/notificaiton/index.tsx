import React from 'react';
import NotificationListItem from './NotificationListItem';
import { Container } from './style';

const NotificationList: React.FC = () => {
  const notifications = [{ name: '마케팅 정보 알림' }, { name: '여행 도중 사진 알림', info: true }];
  return (
    <Container>
      {notifications.map((notification, index) => (
        <NotificationListItem
          key={index}
          notification={notification.name}
          info={notification.info}
        />
      ))}
    </Container>
  );
};

export default NotificationList;
