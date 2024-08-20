import React from 'react';
import NotificationListItem from './NotificationListItem';
import styled from 'styled-components';

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

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.25rem;
`;

export default NotificationList;
