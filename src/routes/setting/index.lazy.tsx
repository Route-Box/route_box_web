import { authService } from '@/api/auth/authService';
import { Header } from '@/components/common/header/index';
import SettingList from '@/components/setting/home/SettingList';
import WithdrawMembership from '@/components/setting/home/WithdrawMembership';
import { useModal } from '@/hooks/useModal';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useMutation } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';
import styled from 'styled-components';
import Loader from '@/components/common/Loader';
import { storageKey } from '@/constants/storageKey';
import { ConfirmationModal } from '@/components/common/modals/ConfirmationModal';

export const Route = createLazyFileRoute('/setting/')({
  component: Setting,
});

function Setting() {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: authService.postWithdraw,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });

  const {
    isOpen: isLogoutOpen,
    openModal: openLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();

  const {
    isOpen: isWithdrawOpen,
    openModal: openWithdrawModal,
    closeModal: closeWithdrawModal,
  } = useModal();

  const handleSectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement; // 클릭한 요소
    if (target.closest('li') && target.textContent === '로그아웃') {
      openLogoutModal();
    } else if (target.textContent === '회원 탈퇴') {
      openWithdrawModal();
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(storageKey.accessToken);
    navigate({ to: '/' });
  };

  const handleWithdraw = useCallback(() => {
    // mutateAsync();
    navigate({ to: '/' });
    alert('탈퇴 되었습니다.');
  }, [navigate]);

  return isPending ? (
    <Loader />
  ) : (
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
      <ConfirmationModal
        isOpen={isWithdrawOpen}
        closeModal={closeWithdrawModal}
        onConfirmAction={handleWithdraw}
        content={'회원 탈퇴 하시겠습니까?'}
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
