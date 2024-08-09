import Header from '@/components/common/Header';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import NotificationList from '@/components/notification/NotificationList';

export const Route = createLazyFileRoute('/notification')({
  component: Notification,
});

function Notification() {
  return (
    <DefaultLayout>
      <Header title="알림" closeButton />
      <NotificationList />
    </DefaultLayout>
  );
}
