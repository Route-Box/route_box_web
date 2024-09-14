import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Item } from './style';

interface SettingListItemProps {
  setting: string;
  isLast: boolean;
  to?: string;
  onClick?: () => void;
}

const SettingListItem: React.FC<SettingListItemProps> = ({ setting, isLast, to, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate({ to });
    } else if (onClick) {
      onClick(); // onClick이 있으면 실행
    }
  };

  return (
    <Item className="body-b-m" isLast={isLast} onClick={handleClick}>
      {setting}
    </Item>
  );
};

export default SettingListItem;
