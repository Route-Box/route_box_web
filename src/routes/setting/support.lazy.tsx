import { Header } from '@/components/common/header/index';
import { ROUTES } from '@/constants/routes';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/setting/support')({
  component: Support,
});

function Support() {
  return (
    <DefaultLayout>
      <Header back={true} go={ROUTES.SETTING.ROOT} title="1:1 문의" />
    </DefaultLayout>
  );
}
