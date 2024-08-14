import { Header } from '@/components/common/header/index';
import SaveBtn from '@/components/common/SaveBtn';
import Write from '@/components/my-page/intro-edit/Write';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

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
      <Frame>
        <Write onInputChange={handleInputChange} />
        <SaveBtn isActive={inputValue.trim().length > 0} text="완료" onClick={handleClick} />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100dvh - 4rem);
  padding: 1.25rem 1.37rem;
  box-sizing: border-box;
  background: var(--White, #fff);
`;
