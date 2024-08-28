import { authService } from '@/api/auth/authService';
import { Header } from '@/components/common/header/index';
import { Modal } from '@/components/modal';
import SettingList from '@/components/setting/home/SettingList';
import WithdrawMembership from '@/components/setting/home/WithdrawMembership';
import { ConfirmationModal } from '@/components/common/modals/ConfirmationModal';
import { useModal } from '@/hooks/useModal';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useMutation } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';
import styled from 'styled-components';
import Loader from '@/components/common/Loader';

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

  /**
   * 사용자가 특정 섹션을 클릭했을 때 호출되는 함수.
   * 클릭한 요소에 따라 로그아웃 또는 회원 탈퇴 모달을 열기 위해
   * 해당 요소의 텍스트를 확인하고, 적절한 모달을 호출합니다.
   *
   * @param event - 클릭 이벤트 객체
   */
  const handleSectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement; // 클릭한 요소
    if (target.closest('li') && target.textContent === '로그아웃') {
      openLogoutModal();
    } else if (target.textContent === '회원 탈퇴') {
      openWithdrawModal();
    }
  };

  const handleLogout = () => {
    console.log('로그아웃되었습니다.');
  };

  const handleWithdraw = useCallback(() => {
    mutateAsync();
    console.log('탈퇴 되었습니다.');
  }, [mutateAsync]);

  return isPending ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Header back={true} current="/setting" go="/" title="설정" />
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
