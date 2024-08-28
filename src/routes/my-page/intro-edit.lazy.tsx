import { queryKey, userInfo } from '@/api/my-page/userInfo';
import CustomBtn from '@/components/common/custom-btn/index';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Write from '@/components/my-page/intro-edit/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/my-page/intro-edit')({
  component: IntroEdit,
});

function IntroEdit() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (data?.introduction) {
      setInputValue(data.introduction);
    }
  }, [data]);

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
    },
  });

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleClick = () => {
    mutateAsync({
      introduction: inputValue,
    }).then(() => {
      navigate({ from: '/my-page/intro-edit', to: '/my-page' });
    });
  };

  return (
    <DefaultLayout>
      <Header back={true} current="/my-page/intro-edit" go="/my-page" title="한 줄 소개" />
      <FlexBox col justify="space-between" px={1.38} py={1.25} h={'calc(100dvh - 4rem)'}>
        <Write value={inputValue} onInputChange={handleInputChange} />
        <CustomBtn disabled={inputValue.length === 0} text="저장" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
