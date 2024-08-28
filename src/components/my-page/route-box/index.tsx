import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { RouteList } from './style';
import { RouteBoxItem } from './RouteBoxItem';
import { RootObject } from '@/api/my-page/types';

const RouteBox: React.FC<RootObject> = ({ routes }) => {
  const isMine = true;
  const userName = '아라';
  const title = isMine ? '내가 담았어요' : `${userName}의 루트박스`;
  const formatDate = (dateTimeString: string) => {
    return dateTimeString.split('T')[0];
  };

  return (
    <FlexBox col gap={1} py={1.62}>
      <h1 className="title-xl">{title}</h1>
      <RouteList>
        {routes.map((route) => (
          <RouteBoxItem
            key={route.routeId}
            routeId={route.routeId}
            routeImageUrl={route.routeImageUrl}
            routeName={route.routeName}
            routeDescription={route.routeDescription}
            // like={10}
            // comment={3}
            createdAt={formatDate(route.createdAt)}
          />
        ))}
      </RouteList>
    </FlexBox>
  );
};

export default RouteBox;
