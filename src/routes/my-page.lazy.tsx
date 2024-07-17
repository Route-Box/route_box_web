import Profile from '@/components/my-page/Profile';
import RouteBox from '@/components/my-page/RouteBox';
import Taste from '@/components/my-page/Taste';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/my-page')({
  component: MyPage,
});

function MyPage() {
  return (
    <DefaultLayout>
      <Frame>
        <Profile />
        <Taste />
        <RouteBox />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.div`
  height: 100vh;
  padding: 1.25rem 1.37rem;
  background: var(--White, #fff);
`;
