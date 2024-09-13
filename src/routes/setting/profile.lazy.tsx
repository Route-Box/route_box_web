import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
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
  const [profileValue, setProfileValue] = useState({
    profileImageUrl: '',
    nickname: '',
    birthDay: '',
    gender: '',
  });

  const [file, setFile] = useState<File | null>(null); // 파일 상태 추가

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    setProfileValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleActiveChange = (active: boolean) => {
    setDisabled(active);
  };

  const handleClick = () => {
    // 데이터 전송
    mutateAsync({
      nickname: profileValue.nickname,
      gender: profileValue.gender,
      birthDay: profileValue.birthDay,
      profileImage: file,
    }).then(() => {
      navigate({ from: '/setting/profile', to: '/my-page' });
    });
  };

  useEffect(() => {
    setProfileValue({
      profileImageUrl: data?.profileImageUrl || '',
      nickname: data?.nickname || '',
      birthDay: data?.birthDay || '',
      gender: data?.gender || '',
    });
  }, [data]);

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <Section>
        <ProfileComponents
          onActiveChange={handleActiveChange}
          setFile={setFile}
          handleInputChange={handleInputChange}
          profileValue={profileValue}
        />
        {/* 임시 파일 업로드 버튼 추가 */}
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
