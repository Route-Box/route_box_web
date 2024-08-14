import { Link } from '@tanstack/react-router';
import styled from 'styled-components';
import LogoImageBase from '@/assets/png/logo-route-box.png';
import AlarmBase from '@/assets/svg/alarm.svg';

const Header = () => {
  return (
    <Container>
      <LogoImage src={LogoImageBase} alt="logo" />
      <Link to="/notification">
        <img src={AlarmBase} alt="alarm" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 22px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  /* background-color: aquamarine; */
`;

const LogoImage = styled.img`
  width: 6.357rem;
  height: auto;
`;

export default Header;
