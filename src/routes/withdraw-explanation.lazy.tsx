import React from 'react';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Header } from '@/components/common/header/index';
import { storageKey } from '@/constants/storageKey';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/api/auth/authService';
import Typography from '@/components/common/Typography';
import useCheckList from '@/hooks/useCheckList';
import { initialWithdrawValues } from '@/constants/initialValues';
import GrayBox from '@/components/common/GrayBox';
import { MarginDiv } from '@/styles';
import CustomBtn from '@/components/common/custom-btn';
import CheckRadio from '@/components/common/CheckRadio';
import TextAreaWithCounter from '@/components/common/TextAreaWithCounter';
import CheckChecked from '@/assets/svg/check-checked.svg';
import FlexBox from '@/components/common/flex-box';

export const Route = createLazyFileRoute('/withdraw-explanation')({
  component: WithdrawExplanation,
});

function WithdrawExplanation() {
  const navigate = useNavigate();
  const { items, toggleCheck } = useCheckList(initialWithdrawValues);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: authService.postWithdraw,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });

  const handleWithdraw = () => {
    mutateAsync().then(() => handleLogout);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(storageKey.accessToken);
    navigate({ to: '/' });
  };

  return (
    <DefaultLayout>
      <Header back title="회원 탈퇴" go={'/setting'} />
      <MarginDiv ml={1.38} mb={1.25}>
        <Typography variant="Body_B_M">탈퇴 전 확인해 주세요.</Typography>
      </MarginDiv>
      <GrayBox padding={1.25}>
        <Typography variant="Body_R_S">
          회원 탈퇴 시 개인 정보 처리 방침에 따라 탈퇴 후에도 90일간 보관되며, 90일이 지난 후에는
          완전히 삭제됩니다.
        </Typography>
      </GrayBox>
      <MarginDiv ml={1.38} mt={2.5} mb={0.88}>
        <Typography variant="Body_B_M">탈퇴 사유를 알려주세요.</Typography>
      </MarginDiv>
      <MarginDiv ml={1.38}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <CheckRadio
                onClick={() => toggleCheck(item.id)}
                text={item.text}
                checked={item.checked}
              />
              <MarginDiv mb={1} />
              {item.id === 'etc' && item.checked && (
                <TextAreaWithCounter placeholder="내용을 작성해주세요" />
              )}
            </div>
          );
        })}
      </MarginDiv>
      <MarginDiv style={{ flex: 1 }} /> {/* 화면 하단으로 밀기 위한 공간 추가 */}
      <div style={{ padding: '1.25rem 1.375rem 0.5rem 1.375rem' }}>
        <CustomBtn
          disabled={!items.filter((item) => item.checked).length}
          text="동의 및 탈퇴"
          onClick={handleWithdraw}
        />
      </div>
    </DefaultLayout>
  );
}

export default WithdrawExplanation;
