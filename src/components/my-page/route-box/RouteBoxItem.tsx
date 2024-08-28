import React from 'react';
import styled from 'styled-components';
import more from '../../../assets/svg/more_btn.svg';
import { Route } from '@/api/my-page/types';

export const RouteBoxItem: React.FC<Route> = ({
  routeId,
  routeName,
  routeDescription,
  routeImageUrl,
  createdAt,
}: Route) => {
  return (
    <RouteItem>
      <Content>
        <img className="route_img" src={routeImageUrl} alt="route" />
        <ContentText>
          <div className="route_content">
            <Title className="body-r-m">{routeName}</Title>
            <Preview className="body-r-s">{routeDescription}</Preview>
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
          <div className="body-r-s" style={{ color: 'var(--gray-3-placeholder-text)' }}>
            {createdAt}
          </div>
          {/* </Detail> */}
        </ContentText>
      </Content>
      <More>
        <img src={more} alt="more" />
      </More>
    </RouteItem>
  );
};

const RouteItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.875rem;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;

  .route_img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
  }
`;

const ContentText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 0.5rem; */
  height: 5rem;
  justify-content: space-between;

  .route_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Black_, #161616);
`;

const Preview = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray-3-placeholder-text);
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  color: var(--gray-3-placeholder-text);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const ItemImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Date = styled.div``;

const More = styled.button`
  background-color: transparent;
  border: none;
`;
