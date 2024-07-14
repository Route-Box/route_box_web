import SubHomeComponent from '@/components/home/SubHomeComponent';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <DefaultLayout>
      <SubHomeComponent title="홈화면" />
    </DefaultLayout>
  );
}
