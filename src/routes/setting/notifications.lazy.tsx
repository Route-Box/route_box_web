import SaveBtn from '@/components/common/SaveBtn';
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
      <Section>
        <NotificationList />
        <SaveBtn isActive text="저장하기" onClick={handleClick} />
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
