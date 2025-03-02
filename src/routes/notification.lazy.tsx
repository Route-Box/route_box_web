import { Header } from '@/components/common/header/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import NotificationList from '@/components/notification/NotificationList';
import { ROUTES } from '@/constants/routes';

export const Route = createLazyFileRoute('/notification')({
  component: Notification,
});

function Notification() {
  return (
    <DefaultLayout>
      <Header close={true} go={ROUTES.HOME} title="알림" />
      <NotificationList />
    </DefaultLayout>
  );
}
