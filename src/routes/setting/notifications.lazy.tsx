import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import NotificationList from '@/components/setting/notificaiton/NotificationList';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/setting/notifications')({
  component: Notifications,
});

function Notifications() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ from: '/setting/notifications', to: '/setting' });
  };

  return (
    <DefaultLayout>
      <Header back={true} current="/setting/notifications" go="/setting" title="알림 설정" />
      <Section>
        <NotificationList />
        <CustomBtn disabled text="저장하기" onClick={handleClick} />
      </Section>
    </DefaultLayout>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100dvh - 4rem);
  padding: 1.25rem 1.37rem;
  box-sizing: border-box;
  background: var(--White, #fff);
`;
