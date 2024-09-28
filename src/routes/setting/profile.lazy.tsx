import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import FlexBox from '@/components/common/flex-box';

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
    console.log('Updating state with:', { name, value });
    setProfileValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  useEffect(() => {
    if (profileValue) {
      setDisabled(false);
    }
  }, [profileValue]);
  console.log('profileValue:', profileValue);

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <ProfileComponents
          setFile={setFile}
          handleInputChange={handleInputChange}
          profileValue={profileValue}
        />
        <CustomBtn disabled={disabled} text="저장하기" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
