import { MyPurchaseRoutesResponse, UserProfileResponse } from '@/api/my-page/types';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Loader from '@/components/common/Loader';
import Profile from '@/components/my-page/profile/index';
import RouteBox from '@/components/my-page/route-box/index';
import Taste from '@/components/my-page/taste/index';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/my-page/')({
  component: MyPage,
});

function MyPage() {
  const { data: userProfile, isLoading } = useQuery<UserProfileResponse>({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });
  const intro = userProfile?.introduction ? userProfile.introduction : '한 줄 소개를 작성해주세요';

  // TODO :: 페이지네이션 적용
  const { data: routes } = useQuery<MyPurchaseRoutesResponse>({
    queryKey: ['routes'],
    queryFn: () => userInfo.getMyPurchasedRoutes(0, 10),
  });

  const { renderMessage, toggleMessageVisibility } = useNativeBridge();

  if (isLoading) return <Loader />;

  return (
    <DefaultLayout>
      <Header menu current="/my-page" go="/setting" title="마이페이지" />
      <FlexBox col gap={2.13} px={1.38}>
        <Profile
          profileImageUrl={userProfile?.profileImageUrl}
          nickname={userProfile?.nickname}
          numOfRoutes={userProfile?.numOfRoutes}
          introduction={intro}
        />
        <Taste
          nickname={userProfile?.nickname}
          mostVisitedLocation={userProfile?.mostVisitedLocation}
          mostTaggedRouteStyles={userProfile?.mostTaggedRouteStyles}
        />
        <RouteBox routes={routes?.content ?? []} />
      </FlexBox>
      {import.meta.env.VITE_APP_BUILD_ENV !== 'production' && renderMessage()}
      {import.meta.env.VITE_APP_BUILD_ENV !== 'production' && (
        <button
          onClick={toggleMessageVisibility}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#47c4b6',
            outline: 0,
            border: 0,
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Toggle Message
        </button>
      )}
    </DefaultLayout>
  );
}
