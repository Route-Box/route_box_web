import { inquiryService } from '@/api/inquiry/inquiryService';
import Loader from '@/components/common/Loader';
import InquiryListItem from '@/components/Inquiry/InquiryListItem';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createLazyFileRoute('/support/inquiry/list')({
  component: InquiryList,
});

export function InquiryList() {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['inquiries'],
    queryFn: inquiryService.getInquiries,
  });

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <ul>
          {data?.inquiries.map((inquiry) => (
            <InquiryListItem
              key={inquiry.inquiryId}
              inquiry={inquiry}
              onClick={() => {
                navigate({
                  to: '/support/inquiry/$id',
                  params: {
                    id: inquiry.inquiryId.toString(),
                  },
                });
              }}
            />
          ))}
          {data?.inquiries.map((inquiry) => (
            <InquiryListItem
              key={inquiry.inquiryId}
              inquiry={inquiry}
              onClick={() => {
                navigate({
                  to: '/support/inquiry/$id',
                  params: {
                    id: inquiry.inquiryId.toString(),
                  },
                });
              }}
            />
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
