import { Header } from '@/components/common/header/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/setting/support')({
  component: Support,
});

function Support() {
  return (
    <DefaultLayout>
      <Header back={true} current="/setting/support" go="/setting" title="1:1 문의" />
    </DefaultLayout>
  );
}
