import SettingList from '@/components/setting/home/SettingList';
import WithdrawMembership from '@/components/setting/home/WithdrawMembership';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/setting/')({
  component: Setting,
});

function Setting() {
  return (
    <DefaultLayout>
      <Frame>
        <SettingList />
        <WithdrawMembership />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.section`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1.37rem;
  box-sizing: border-box;
`;
