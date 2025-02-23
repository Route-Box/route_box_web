import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/support/inquiry/new/')({
  component: NewInquiry,
});

function NewInquiry() {
  return (
    <div>
      <h1>1:1 문의 폼 제출</h1>
      <ul>
        <li>react-hook-form 사용하기</li>
        <li>context 사용하기 </li>
        <li>스키마 유효성 검사 라이브러리 : zod나 yup 이용하기</li>
      </ul>
    </div>
  );
}
