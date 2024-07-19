import React from 'react';
import styled from 'styled-components';
import SubComponentTitle from './SubComponentTitle';

const Taste: React.FC = () => {
  const userName = '고작가';
  const place = '경주';
  const category = '가족여행';

  return (
    <Frame>
      <SubComponentTitle title={`${userName}의 취향은`} />
      <Content>
        <Detail>
          <HashTag>
            <span>#</span>
            <span>{place}</span>
          </HashTag>
          에서
        </Detail>
        <Detail>
          <HashTag>
            <span>#</span>
            <span>{category}</span>
          </HashTag>
          을 많이 갔어요
        </Detail>
      </Content>
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.13rem;
  margin-bottom: 3.75rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.62rem;
  color: var(--gray-3-placeholder-text, #70747e);
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.225rem */
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HashTag = styled.div`
  display: flex;
  padding: 0.625rem 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 2.5rem;
  background: rgba(68, 195, 185, 0.2);
  color: var(--Sub_black, #242b37);
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.225rem */
  margin-right: 0.38rem;
`;

export default Taste;
