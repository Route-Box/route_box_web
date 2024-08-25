import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { Detail, HashTag } from './style';

const Taste: React.FC = () => {
  const userName = '고작가';
  const place = '경주';
  const category = '가족여행';

  return (
    <FlexBox col gap={0.75}>
      <h1 className="title-xl">{`${userName}의 취향은`}</h1>
      <FlexBox gap={0.62}>
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
      </FlexBox>
    </FlexBox>
  );
};

export default Taste;
