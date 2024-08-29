import { Link } from '@tanstack/react-router';
import styled from 'styled-components';
import LogoImageBase from '@/assets/png/logo-route-box.png';
import AlarmBase from '@/assets/svg/alarm.svg';
import CouponBase from '@/assets/png/coupon-icon.png';
import WalletBase from '@/assets/png/wallet-icon.png';
import { standardViewportWidth } from '@/styles';
import { useQuery } from '@tanstack/react-query';
import { notificationService } from '@/api/notification/notificationService';
import { UnreadNotificationResponse } from '@/api/notification/types';
import { useNativeBridge } from '@/hooks/useNativeBridge';
import { useCallback } from 'react';

const Header = () => {
  const { data, isLoading } = useQuery<UnreadNotificationResponse>({
    queryKey: ['unreadNotification'],
    queryFn: notificationService.hasUnreadNotification,
  });

  const { changePage } = useNativeBridge();

  const handleMoveRoute = useCallback(() => {
    changePage('COUPON');
  }, [changePage]);

  return (
    <Container>
      <LogoImage src={LogoImageBase} alt="logo" />
      <Icons>
        <Icon src={CouponBase} alt="coupon" onClick={handleMoveRoute} />
        {/* <Icon src={WalletBase} alt="wallet" /> */}
        <Link to="/notification">
          <AlarmContainer>
            <img src={AlarmBase} alt="alarm" />
            {!isLoading && data?.hasUnreadNotification && <RedDot />}
          </AlarmContainer>
        </Link>
      </Icons>
    </Container>
  );
};

const AlarmContainer = styled.div`
  position: relative;
`;

const RedDot = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 4px;
  height: 4px;
  background-color: #e71f2a;
  border-radius: 50%;
`;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${standardViewportWidth};
  height: 4rem;
  padding: 0 1.375rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
`;
const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

const LogoImage = styled.img`
  width: 6.357rem;
  height: auto;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default Header;
