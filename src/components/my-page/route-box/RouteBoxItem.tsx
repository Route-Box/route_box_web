import React from 'react';
import more from '../../../assets/svg/more_btn.svg';
import { Route } from '@/api/my-page/types';
import { Content, ContentText, More, Preview, RouteItem, Title } from './style';

interface RouteBoxItemProps extends Route {
  onClick: () => void;
}

export const RouteBoxItem: React.FC<RouteBoxItemProps> = ({
  routeName,
  routeDescription,
  routeImageUrl,
  createdAt,
  onClick,
}: RouteBoxItemProps) => {
  return (
    <RouteItem onClick={onClick}>
      <Content>
        <img src={routeImageUrl} alt="route" />
        <ContentText>
          <div className="route_content">
            <div className="body-r-m">{routeName}</div>
            <div className="body-r-s">{routeDescription}</div>
          </div>
          {/* <Detail>
          <Item className="body-b-xs">
            <ItemImg src={likeIcon} alt="like" />
            {10}
          </Item>
          <Item className="body-b-xs">
            <ItemImg src={commentIcon} alt="comment" />
            {3}
          </Item> */}
          <div className="body-r-s create_date">{createdAt}</div>
          {/* </Detail> */}
        </ContentText>
      </Content>
      <More>
        <img src={more} alt="more" />
      </More>
    </RouteItem>
  );
};
