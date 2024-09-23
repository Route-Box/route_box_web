import { useCallback } from 'react';
import { Header } from '@/components/common/header/index';
import SettingList from '@/components/setting/home/index';
import { useModal } from '@/hooks/useModal';
import DefaultLayout from '@/layouts/DefaultLayout';
import { storageKey } from '@/constants/storageKey';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { ConfirmationModal } from '@/components/common/modals/index';
import FlexBox from '@/components/common/flex-box';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import { setTokenHeader } from '@/api/baseApi';
import { toast } from 'react-toastify';

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

  const { setToken, handleLogout: handleNativeLogout } = useNativeBridge();

  const handleLogout = () => {
    handleNativeLogout();
    // TODO :: 로그아웃 리펙토링
    window.localStorage.removeItem(storageKey.accessToken);
    setToken(null);
    setTokenHeader(null);
    toast.success('로그아웃 되었습니다.');
    navigate({ to: '/' });
  };

  const handleWithdraw = useCallback(() => {
    navigate({ to: '/withdraw-explanation' });
  }, [navigate]);

  return (
    <DefaultLayout>
      <Header back current="/setting" go="/my-page" title="설정" />
      <FlexBox col px={1.37} py={0.75}>
        <SettingList openLogoutModal={openLogoutModal} />
        <button
          className="body-r-xs"
          onClick={handleWithdraw}
          style={{
            padding: 0,
            background: 'none',
            border: 'none',
            textDecoration: 'underline',
            color: 'var(--Gray4_disable-text)',
            cursor: 'pointer',
          }}
        >
          회원 탈퇴
        </button>
      </FlexBox>

      <ConfirmationModal
        isOpen={isLogoutOpen}
        closeModal={closeLogoutModal}
        onConfirmAction={handleLogout}
        content={'로그아웃 하시겠습니까?'}
      />
    </DefaultLayout>
  );
}
