import { UserProfileResponse } from '@/api/my-page/types';
import { userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
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
  const { data, isLoading } = useQuery<UserProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: userInfo.getUserProfile,
  });
  const intro = data?.introduction ? data.introduction : '한 줄 소개를 작성해주세요';

  return (
    <DefaultLayout>
      <Header back={true} current="/my-page" go="/" title="마이페이지" menu={true} />
      <FlexBox col gap={2.13}>
        <Profile
          profileImageUrl={data?.profileImageUrl}
          nickname={data?.nickname}
          numOfRoutes={data?.numOfRoutes}
          introduction={intro}
        />
        <Taste
          nickname={data?.nickname}
          mostVisitedLocation={data?.mostVisitedLocation}
          mostTaggedRouteStyles={data?.mostTaggedRouteStyles}
        />
        <RouteBox />
      </FlexBox>
    </DefaultLayout>
  );
}
