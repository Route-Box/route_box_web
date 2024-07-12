import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <DefaultLayout>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    </DefaultLayout>
  );
}
