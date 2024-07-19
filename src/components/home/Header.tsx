import styled from 'styled-components';
import LogoImageBase from '@/assets/png/logo-route-box.png';
import AlarmBase from '@/assets/svg/alarm.svg';

const Header = () => {
  return (
    <Container>
      <LogoImage src={LogoImageBase} alt="logo" />

      <img src={AlarmBase} alt="alarm" />
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
  /* background-color: aquamarine; */
`;

const LogoImage = styled.img`
  width: 102px;
  height: auto;
`;

export default Header;
