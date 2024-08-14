import SaveBtn from '@/components/common/SaveBtn';
import { ProfileComponents } from '@/components/setting/profile';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

export const Route = createLazyFileRoute('/setting/profile')({
  component: Profile,
});

function Profile() {
  const [isActive, setIsActive] = useState(false);
  const handleActiveChange = (active: boolean) => {
    setIsActive(active);
  };

  return (
    <DefaultLayout>
      <Section>
        <ProfileComponents onActiveChange={handleActiveChange} />
        <SaveBtn isActive={isActive} text="저장하기" />
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
