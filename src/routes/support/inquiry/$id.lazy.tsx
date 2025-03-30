import { inquiryService } from '@/api/inquiry/inquiryService';
import { Header } from '@/components/common/header';
import Typography from '@/components/common/Typography';
import { InquiryTypeMap } from '@/constants/inquiry';
import { ROUTES } from '@/constants/routes';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support/inquiry/$id')({
  component: InquiryDetail,
});

function InquiryDetail() {
  const { id } = Route.useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['inquiry', id],
    queryFn: () => inquiryService.getInquiryDetail(Number(id)),
  });

  return (
    <DefaultLayout>
      <Header title="나의 문의 내역" back go={ROUTES.SUPPORT.INQUIRY.ROOT} />
      <Typography variant="Body_B_S" color="var(--grey-scale-black-090328)">
        {InquiryTypeMap[data?.type ?? 'ETC']}
      </Typography>
      <Typography variant="Body_R_M">{data?.content}</Typography>
      <Typography variant="Body_B_S" color="var(--main-color)">
        ROUTE BOX
      </Typography>
      <Typography variant="Body_R_M" color="var(--Black)">
        {data?.reply}
      </Typography>
    </DefaultLayout>
  );
}
