import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/my-page')({
  component: MyPage,
});

function MyPage() {
  return (
    <DefaultLayout>
      <div className="p-2">
        <h3>Welcome MyPage!</h3>
      </div>
    </DefaultLayout>
  );
}
