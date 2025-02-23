import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support/inquiry/list')({
  component: NewInquiry,
});

function NewInquiry() {
  return (
    <div>
      <h1>1:1 문의 리스트</h1>
    </div>
  );
}
