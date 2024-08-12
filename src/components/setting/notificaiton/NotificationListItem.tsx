import React from 'react';
import styled from 'styled-components';
import ToggleButton from './SlidingToggleButton';
import Info from '../../../assets/svg/info.svg';

interface NotificationListItemProps {
  notification: string;
  info?: boolean;
}

const NotificationListItem: React.FC<NotificationListItemProps> = ({ notification, info }) => {
  return (
    <Container>
      <Name>
        {notification}
        {info && <InfoIcon src={Info} alt="Info" />}
      </Name>
      <ToggleButton />
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--N80, #474d66);
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  margin-left: 1.38rem;
  margin-right: 1.38rem;
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const InfoIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export default NotificationListItem;
