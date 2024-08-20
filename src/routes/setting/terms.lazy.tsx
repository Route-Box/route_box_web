import { Header } from '@/components/common/header/index';
import TermsList from '@/components/setting/terms/TermsList';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/setting/terms')({
  component: Terms,
});

function Terms() {
  return (
    <DefaultLayout>
      <Header back={true} />
      <TermsList />
    </DefaultLayout>
  );
}
