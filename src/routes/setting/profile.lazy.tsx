import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKey, userInfo } from '@/api/my-page/userInfo';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [disabled, setDisabled] = useState(false);

  const [file, setFile] = useState<File | null>(null); // 파일 상태 추가

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getUserProfile,
  });

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleActiveChange = (active: boolean) => {
    setDisabled(active);
  };

  const handleClick = () => {
    // 데이터 전송
    mutateAsync({
      nickname: '후후',
      gender: 'FEMALE',
      birthDay: '2020-02-02',
      introduction: '저는 자유인입니다.',
      profileImage: file,
    }).then(() => {
      navigate({ from: '/setting/profile', to: '/my-page' });
    });
  };

  return (
    <DefaultLayout>
      <Header back={true} title="회원 정보 수정" />
      <Section>
        <ProfileComponents onActiveChange={handleActiveChange} />
        {/* 임시 파일 업로드 버튼 추가 */}
        <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
        <CustomBtn disabled={disabled} text="저장하기" onClick={handleClick} />
      </Section>
    </DefaultLayout>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100dvh - 4rem);
  padding: 1.25rem 1.37rem;
  box-sizing: border-box;
  background: var(--White, #fff);
`;
