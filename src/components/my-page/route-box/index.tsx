import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { RouteList } from './style';
import { RouteBoxItem } from './RouteBoxItem';
import { routeData } from './Dummy';

const RouteBox: React.FC = () => {
  const isMine = true;
  const userName = '아라';
  const title = isMine ? '내가 담았어요' : `${userName}의 루트박스`;
  return (
    <FlexBox col gap={1} py={1.62}>
      <h1 className="title-xl">{title}</h1>
      <RouteList>
        {routeData.map((route, index) => (
          <RouteBoxItem
            key={index}
            title={route.title}
            preview={route.preview}
            like={route.like}
            comment={route.comment}
            date={route.date}
          />
        ))}
      </RouteList>
    </FlexBox>
  );
};

export default RouteBox;
