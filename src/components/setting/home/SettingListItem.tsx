import React from 'react';
import styled from 'styled-components';
import { useNavigate } from '@tanstack/react-router';

interface SettingListItemProps {
  setting: string;
  isLast: boolean;
  to?: string;
}

const SettingListItem: React.FC<SettingListItemProps> = ({ setting, isLast, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate({ to });
    } else {
      console.log('로그아웃');
    }
  };

  return (
    <Container isLast={isLast} onClick={handleClick}>
      {setting}
    </Container>
  );
};

const Container = styled.div<{ isLast: boolean }>`
  padding: 1.75rem 0;
  color: #000;
  font-feature-settings: 'case' on;
  -webkit-text-stroke-color: var(--Gray6_disable-btn-bg, #f2f2f2);
  font-family: 'Pretendard';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  border-bottom: ${({ isLast }) =>
    isLast ? 'none' : '1px solid var(--Gray6_disable-btn-bg, #f2f2f2)'};
`;

export default SettingListItem;
