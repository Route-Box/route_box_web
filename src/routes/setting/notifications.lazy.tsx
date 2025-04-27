import { Header } from '@/components/common/header/index';
import Button from '@/components/common/button/index';
import NotificationList from '@/components/setting/notificaiton/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import FlexBox from '@/components/common/flex-box';
import { ROUTES } from '@/constants/routes';

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
      <Header back={true} go={ROUTES.SETTING.ROOT} title="알림 설정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <NotificationList />
        <Button disabled onClick={handleClick}>
          저장하기
        </Button>
      </FlexBox>
    </DefaultLayout>
  );
}
