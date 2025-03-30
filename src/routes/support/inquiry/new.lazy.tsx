import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { inquiryService } from '@/api/inquiry/inquiryService';
import TextAreaWithCounter from '@/components/common/TextAreaWithCounter';
import { ImageUploader } from '@/components/common/ImageUploader';

export const Route = createLazyFileRoute('/support/inquiry/new')({
  component: NewInquiry,
});

export function NewInquiry() {
  return <InquiryForm />;
}

function FieldInfo<TValue>({ field }: { field: AnyFieldApi }) {
  return (
    <div>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </div>
  );
}

export const InquiryForm = () => {
  const navigate = useNavigate();
  // 폼 스키마 정의
  const form = useForm({
    defaultValues: {
      content: '',
      inquiryType: '',
      images: [] as File[],
    },
    onSubmit: async (values) => {
      // submit 로직은 useMutation에서 처리
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: inquiryService.createInquiry,
    onSuccess: () => {
      alert('문의가 성공적으로 등록되었습니다.');
      navigate({ to: '/support/inquiry/list' });
    },
    onError: (error) => {
      alert('문의 등록에 실패했습니다.');
    },
  });

  return (
    <div style={{ padding: '0 1.37rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {/* 문의 유형 선택 */}
        <form.Field
          name="inquiryType"
          children={(field) => (
            <div className="mb-4">
              <select
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value="">선택해주세요</option>
                <option value="ERROR">오류</option>
                <option value="MEMBER_INFO">회원정보</option>
                <option value="ETC">기타</option>
              </select>
              <FieldInfo field={field} />
            </div>
          )}
        />

        {/* 문의 내용 */}
        <form.Field
          name="content"
          children={(field) => (
            <div>
              <TextAreaWithCounter
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                placeholder="문의 내용을 작성해주세요"
                maxLength={400}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          )}
        />

        {/* 이미지 업로드 */}
        <form.Field
          name="images"
          validators={{
            onChange: (images) => {
              if (images.value.length > 5) {
                return '최대 5개의 이미지만 첨부할 수 있습니다.';
              }
              return null;
            },
          }}
          children={(field) => (
            <div>
              <ImageUploader field={field} />
              <FieldInfo field={field} />
            </div>
          )}
        />

        {/* 제출 버튼 */}
        <button type="submit" disabled={isPending}>
          {isPending ? '제출 중...' : '문의하기'}
        </button>
      </form>
    </div>
  );
};
