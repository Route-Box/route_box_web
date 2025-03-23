import { inquiryService } from '@/api/inquiry/inquiryService';
import InquiryListItem from '@/components/Inquiry';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support/inquiry/list')({
  component: InquiryList,
});

export function InquiryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['inquiries'],
    queryFn: inquiryService.getInquiries,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      <ul>
        {data?.inquiries.map((inquiry) => (
          <InquiryListItem key={inquiry.inquiryId} inquiry={inquiry} />
        ))}
      </ul>
    </div>
  );
}
