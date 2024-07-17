import React from 'react';
import styled from 'styled-components';
import routeImg from '../../assets/route.svg';
import likeIcon from '../../assets/like.svg';
import commentIcon from '../../assets/comment.svg';
import more from '../../assets/more_btn.svg';

interface RouteBoxItemProps {
  title: string;
  preview: string;
  like: number;
  comment: number;
  date: string;
}

export const RouteBoxItem: React.FC<RouteBoxItemProps> = ({
  title,
  preview,
  like,
  comment,
  date,
}: RouteBoxItemProps) => {
  return (
    <Frame>
      <RouteImg src={routeImg} alt="route" />
      <Content>
        <Title>{title}</Title>
        <Preview>{preview}</Preview>
        <Detail>
          <Item>
            <ItemImg src={likeIcon} alt="like" />
            {like}
          </Item>
          <Item>
            <ItemImg src={commentIcon} alt="comment" />
            {comment}
          </Item>
          <Date> {date}</Date>
        </Detail>
      </Content>
      <MoreImg src={more} alt="more" />
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-style: normal;
`;

const RouteImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-right: 1.25rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: inline-block;
  max-width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Black_, #161616);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
`;

const Preview = styled.div`
  display: inline-block;
  max-width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray-3-placeholder-text, #70747e);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  color: var(--gray-3-placeholder-text, #70747e);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem; /* 150% */
`;

const ItemImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Date = styled.div`
  margin-left: 0.75rem;
`;

const MoreImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
`;
