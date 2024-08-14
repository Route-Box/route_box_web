import TermsList from '@/components/setting/terms/TermsList';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/setting/terms')({
  component: Terms,
});

function Terms() {
  return (
    <DefaultLayout>
      <TermsList />
    </DefaultLayout>
  );
}
