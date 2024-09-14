import React from 'react';
import ToggleButton from './SlidingToggleButton';
import Info from '../../../assets/svg/info.svg';
import { Item } from './style';

interface NotificationListItemProps {
  notification: string;
  info?: boolean;
}

const NotificationListItem: React.FC<NotificationListItemProps> = ({ notification, info }) => {
  return (
    <Item>
      <span className="body-r-m">
        {notification}
        {info && (
          <button>
            <img src={Info} alt="Info" />
          </button>
        )}
      </span>
      <ToggleButton />
    </Item>
  );
};

export default NotificationListItem;
