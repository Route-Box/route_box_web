import DoneBtn from '@/components/my-page/intro-edit/DoneBtn';
import Write from '@/components/my-page/intro-edit/Write';
import Profile from '@/components/my-page/Profile';
import RouteBox from '@/components/my-page/RouteBox';
import Taste from '@/components/my-page/Taste';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/my-page')({
  component: MyPage,
});

function MyPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <DefaultLayout>
      <Frame>
        <Write onInputChange={handleInputChange} />
        <DoneBtn isActive={inputValue.trim().length > 0} />
        <Profile />
        <Taste />
        <RouteBox />
      </Frame>
    </DefaultLayout>
  );
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.37rem;
  box-sizing: border-box;
  background: var(--White, #fff);
`;
