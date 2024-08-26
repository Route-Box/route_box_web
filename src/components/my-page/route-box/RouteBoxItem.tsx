import React from 'react';
import styled from 'styled-components';
import routeImg from '../../../assets/svg/route.svg';
import likeIcon from '../../../assets/svg/like.svg';
import commentIcon from '../../../assets/svg/comment.svg';
import more from '../../../assets/svg/more_btn.svg';
import FlexBox from '@/components/common/flex-box';

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
    <RouteItem>
      <RouteImg src={routeImg} alt="route" />
      <Content>
        <Title className="body-r-m">{title}</Title>
        <Preview className="body-r-s">{preview}</Preview>
        <Detail>
          <Item className="body-b-xs">
            <ItemImg src={likeIcon} alt="like" />
            {like}
          </Item>
          <Item className="body-b-xs">
            <ItemImg src={commentIcon} alt="comment" />
            {comment}
          </Item>
          <Date className="body-r-s"> {date}</Date>
        </Detail>
      </Content>
      <More>
        <img src={more} alt="more" />
      </More>
    </RouteItem>
  );
};

const RouteItem = styled.li`
  display: flex;
`;

const RouteImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-right: 1.25rem;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
`;

const Title = styled.div`
  display: inline-block;
  width: 100%; /* 부모 요소에 맞춰 유동적으로 조정 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Black_, #161616);
`;

const Preview = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray-3-placeholder-text, #70747e);
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  color: var(--gray-3-placeholder-text, #70747e);
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

const Date = styled.div`
  margin-left: 0.75rem;
`;

const More = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 1.88rem;
`;
