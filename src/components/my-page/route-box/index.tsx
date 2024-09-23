import FlexBox from '@/components/common/flex-box';
import React from 'react';
import { RouteList } from './style';
import { RouteBoxItem } from './RouteBoxItem';
import { MyPurchaseRoutesResponse } from '@/api/my-page/types';
import Typography from '@/components/common/Typography';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import DefaultThumbnailBase from '@/assets/png/default-thumbnail.png';

const RouteBox: React.FC<{ routes: MyPurchaseRoutesResponse['content'] }> = ({
  routes,
}: {
  routes: MyPurchaseRoutesResponse['content'];
}) => {
  const isMine = true;
  const userName = '아라';
  const title = isMine ? '내가 담았어요' : `${userName}의 루트박스`;
  const formatDate = (dateTimeString: string) => {
    return dateTimeString?.split('T')[0];
  };

  const { changePage } = useNativeBridge();

  return (
    <FlexBox col gap={1} py={1.62}>
      <h1 className="title-xl">{title}</h1>
      <RouteList>
        {routes?.map((route, idx) => (
          <RouteBoxItem
            onClick={() => {
              changePage('ROUTE', String(route.id));
            }}
            key={idx}
            routeId={route.id}
            routeImageUrl={route.thumbnailImageUrl ?? DefaultThumbnailBase}
            routeName={route.name}
            routeDescription={route.description}
            // like={10}
            // comment={3}
            createdAt={formatDate(route.purchasedAt)}
          />
        ))}

        {routes.length === 0 && (
          <div>
            <Typography variant="Body_B_M" color="#70747E">
              아직 담은 루트가 없어요!
            </Typography>
          </div>
        )}
      </RouteList>
    </FlexBox>
  );
};

export default RouteBox;
