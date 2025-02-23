import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support/inquiry/$id')({
  component: InquiryDetail,
});

function InquiryDetail() {
  const { id } = Route.useParams();

  return (
    <div>
      <h1>문의 상세</h1>
      <p> 문의 id : {id}</p>
    </div>
  );
}
