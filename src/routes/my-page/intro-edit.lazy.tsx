import CustomBtn from '@/components/common/custom-btn/index';
import FlexBox from '@/components/common/flex-box';
import { Header } from '@/components/common/header/index';
import Write from '@/components/my-page/intro-edit/index';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createLazyFileRoute('/my-page/intro-edit')({
  component: IntroEdit,
});

function IntroEdit() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleClick = () => {
    navigate({ from: '/my-page/intro-edit', to: '/my-page' });
  };

  return (
    <DefaultLayout>
      <Header back={true} current="/my-page/intro-edit" go="/my-page" title="한 줄 소개" />
      <FlexBox col justify="space-between" px={1.38} py={1.25} h={'calc(100dvh - 4rem)'}>
        <Write onInputChange={handleInputChange} />
        <CustomBtn disabled={inputValue.length === 0} text="저장" onClick={handleClick} />
      </FlexBox>
    </DefaultLayout>
  );
}
