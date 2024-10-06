import { Header } from '@/components/common/header/index';
import CustomBtn from '@/components/common/custom-btn/index';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import FlexBox from '@/components/common/flex-box';
import { queryKey, userInfo } from '@/api/my-page/userInfo';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [initialProfileValue, setInitialProfileValue] = useState({
    profileImageUrl: '',
    nickname: '',
    birthDay: '',
    gender: '',
  });

  const [profileValue, setProfileValue] = useState({
    profileImageUrl: '',
    nickname: '',
    birthDay: '',
    gender: '',
  });

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

  useEffect(() => {
    if (data) {
      setProfileValue({
        profileImageUrl: data?.profileImageUrl || '',
        nickname: data?.nickname || '',
        birthDay: data?.birthDay || '',
        gender: data?.gender || '',
      });
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const initialData = {
        profileImageUrl: data?.profileImageUrl || '',
        nickname: data?.nickname || '',
        birthDay: data?.birthDay || '',
        gender: data?.gender || '',
      };
      setProfileValue(initialData);
      setInitialProfileValue(initialData); // 초기값 저장
    }
  }, [data]);

  // 수정된 값만 필터링하는 함수
  const getUpdatedFields = () => {
    const updatedFields: Partial<typeof profileValue> = {};
    Object.keys(profileValue).forEach((key) => {
      const typedKey = key as keyof typeof profileValue;
      if (profileValue[typedKey] !== initialProfileValue[typedKey]) {
        updatedFields[typedKey] = profileValue[typedKey];
      }
    });
    return updatedFields;
  };

  // 저장 버튼 클릭 시 수정된 값만 패치
  const handleClick = async () => {
    const updatedFields = getUpdatedFields(); // 수정된 값 필터링
    // if (Object.keys(updatedFields).length === 0) {
    //   console.log('No changes to save.');
    //   return;
    // }
    try {
      await mutateAsync(updatedFields); // 수정된 값만 패치
      navigate({ from: '/setting/profile', to: '/my-page' });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <DefaultLayout>
      <Header back go={'/setting'} title="회원 정보 수정" />
      <FlexBox col justify="space-between" h="calc(100dvh - 4rem)" px={1.37} py={1.25}>
        <ProfileComponents handleInputChange={handleInputChange} profileValue={profileValue} />
        <CustomBtn text="저장하기" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
