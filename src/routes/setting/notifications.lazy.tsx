import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
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
        <CustomBtn disabled text="저장하기" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
