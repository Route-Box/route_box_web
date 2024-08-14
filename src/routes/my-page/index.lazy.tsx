import { Header } from '@/components/common/header/index';
import Profile from '@/components/my-page/Profile';
import RouteBox from '@/components/my-page/RouteBox';
import Taste from '@/components/my-page/Taste';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/my-page/')({
  component: MyPage,
});

function MyPage() {
  return (
    <DefaultLayout>
      <Header back={true} current="/my-page" go="/" title="마이페이지" menu={true} />
      <Frame>
        <Profile />
        <Taste />
        <RouteBox />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.37rem;
  box-sizing: border-box;
  background: var(--White, #fff);
`;
