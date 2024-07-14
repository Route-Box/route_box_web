import SubComponent from '@/components/my-page/SubComponent';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/my-page')({
  component: MyPage,
});

function MyPage() {
  return (
    <DefaultLayout>
      <SubComponent title="마이페이지" />
    </DefaultLayout>
  );
}
