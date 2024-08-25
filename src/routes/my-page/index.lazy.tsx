import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Profile from '@/components/my-page/profile/index';
import RouteBox from '@/components/my-page/route-box/index';
import Taste from '@/components/my-page/taste/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/my-page/')({
  component: MyPage,
});

function MyPage() {
  return (
    <DefaultLayout>
      <Header back={true} current="/my-page" go="/" title="마이페이지" menu={true} />
      <FlexBox col gap={2.13}>
        <Profile />
        <Taste />
        <RouteBox />
      </FlexBox>
    </DefaultLayout>
  );
}
