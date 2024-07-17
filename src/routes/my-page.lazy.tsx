import Profile from '@/components/my-page/Profile';
import SubComponent from '@/components/my-page/SubComponent';
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
        {/* <SubComponent title="마이페이지" /> */}
        <Profile />
        <Taste />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.div`
  padding-left: 1.37rem;
  padding-right: 1.37rem;
  background: var(--White, #fff);
`;
