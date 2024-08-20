import { Header } from '@/components/common/header/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import NotificationList from '@/components/notification/NotificationList';

export const Route = createLazyFileRoute('/notification')({
  component: Notification,
});

function Notification() {
  return (
    <DefaultLayout>
      <Header close={true} current="/notification" go="/" title="한 줄 소개" />
      <NotificationList />
    </DefaultLayout>
  );
}
