import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { Detail, HashTag } from './style';

interface TasteProps {
  nickname?: string;
  mostVisitedLocation?: string;
  mostTaggedRouteStyles?: string;
}

const Taste: React.FC<TasteProps> = ({ nickname, mostVisitedLocation, mostTaggedRouteStyles }) => {
  return (
    <FlexBox col gap={0.75}>
      <h1 className="title-xl">{`${nickname}의 취향은`}</h1>
      <FlexBox gap={0.62}>
        <Detail>
          <HashTag>
            <span>#</span>
            <span>{mostVisitedLocation}</span>
          </HashTag>
          에서
        </Detail>
        <Detail>
          <HashTag>
            <span>#</span>
            <span>{mostTaggedRouteStyles}</span>
          </HashTag>
          을 많이 갔어요
        </Detail>
      </FlexBox>
    </FlexBox>
  );
};

export default Taste;
