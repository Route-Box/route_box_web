import { queryKey, userInfo } from '@/api/my-page/userInfo';
import Button from '@/components/common/button/index';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Write from '@/components/my-page/intro-edit/index';
import { ROUTES } from '@/constants/routes';
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

  const { mutate } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.userProfile] });
      navigate({ from: '/my-page/intro-edit', to: '/my-page' });
    },
  });

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleClick = () =>
    mutate({
      introduction: inputValue,
    });

  return (
    <DefaultLayout>
      <Header back={true} go={ROUTES.MY_PAGE.ROOT} title="한 줄 소개" />
      <FlexBox col justify="space-between" px={1.38} py={1.25} h={'calc(100dvh - 4rem)'}>
        <Write value={inputValue} onInputChange={handleInputChange} />
        <Button disabled={inputValue.length === 0} onClick={handleClick}>
          저장
        </Button>
      </FlexBox>
    </DefaultLayout>
  );
}
