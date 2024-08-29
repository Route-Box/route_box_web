import { RootObject, UserProfileResponse } from '@/api/my-page/types';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Loader from '@/components/common/Loader';
import Profile from '@/components/my-page/profile/index';
import RouteBox from '@/components/my-page/route-box/index';
import Taste from '@/components/my-page/taste/index';
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

  const { data: routes } = useQuery<RootObject>({
    queryKey: ['routes'],
    queryFn: userInfo.getMyPurchasedRoutes,
  });

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
        <RouteBox routes={routes?.routes ?? []} />
      </FlexBox>
    </DefaultLayout>
  );
}
