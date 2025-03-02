import { Header } from '@/components/common/header';
import { Tab } from '@/components/common/tab';
import { MarginDiv } from '@/styles';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/support/inquiry/')({
  component: SupportPage,
});

function SupportPage() {
  return (
    <>
      <Header title="1:1 문의" back current="/support/inquiry" go="/setting" />
      <MarginDiv mt={4} />
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
            content: <div>두 번째 탭 내용</div>,
          },
        ]}
        defaultTabId="tab1"
      />
    </>
  );
}
