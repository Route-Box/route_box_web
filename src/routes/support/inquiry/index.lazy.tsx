import { Header } from '@/components/common/header';
import { Tab } from '@/components/common/tab';
import { ROUTES } from '@/constants/routes';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';

export const Route = createLazyFileRoute('/support/inquiry/')({
  component: SupportPage,
});

const InquiryList = lazy(() =>
  import('./list.lazy').then((module) => ({
    default: module.InquiryList,
  }))
);

function SupportPage() {
  return (
    <DefaultLayout>
      <Header title="1:1 문의" back go={ROUTES.SETTING.ROOT} />
      <Tab
        tabs={[
          {
            id: 'tab1',
            label: '문의하기',
            content: <div>첫 번째 탭 내용</div>,
          },
          {
            id: 'tab2',
            label: '나의 문의 내역',
            content: <InquiryList />,
          },
        ]}
        defaultTabId="tab1"
      />
    </DefaultLayout>
  );
}
