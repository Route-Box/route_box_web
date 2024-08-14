import SaveBtn from '@/components/common/SaveBtn';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handleActiveChange = (active: boolean) => {
    setIsActive(active);
  };
  const handleClick = () => {
    navigate({ from: '/setting/profile', to: '/setting' });
  };

  return (
    <DefaultLayout>
      <Section>
        <ProfileComponents onActiveChange={handleActiveChange} />
        <SaveBtn isActive={isActive} text="저장하기" onClick={handleClick} />
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
