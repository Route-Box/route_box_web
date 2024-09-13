import { useCallback } from 'react';
import styled from 'styled-components';
import { Header } from '@/components/common/header/index';
import SettingList from '@/components/setting/home/SettingList';
import WithdrawMembership from '@/components/setting/home/WithdrawMembership';
import { useModal } from '@/hooks/useModal';
import DefaultLayout from '@/layouts/DefaultLayout';
import { storageKey } from '@/constants/storageKey';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { ConfirmationModal } from '@/components/common/modals/ConfirmationModal';

export const Route = createLazyFileRoute('/setting/')({
  component: Setting,
});

function Setting() {
  const navigate = useNavigate();

  const {
    isOpen: isLogoutOpen,
    openModal: openLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();

  const handleSectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement; // 클릭한 요소
    if (target.closest('li') && target.textContent === '로그아웃') {
      openLogoutModal();
    } else if (target.textContent === '회원 탈퇴') {
      handleWithdraw();
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(storageKey.accessToken);
    alert('로그아웃 되었습니다.');
    navigate({ to: '/' });
  };

  const handleWithdraw = useCallback(() => {
    navigate({ to: '/withdraw-explanation' });
  }, [navigate]);

  return (
    <DefaultLayout>
      <Header back current="/setting" go="/my-page" title="설정" />
      <Frame onClick={handleSectionClick}>
        <SettingList />
        <WithdrawMembership />
      </Frame>

      <ConfirmationModal
        isOpen={isLogoutOpen}
        closeModal={closeLogoutModal}
        onConfirmAction={handleLogout}
        content={'로그아웃 하시겠습니까?'}
      />
    </DefaultLayout>
  );
}

const Frame = styled.section`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1.37rem;
  box-sizing: border-box;
`;
