import { Link } from '@tanstack/react-router';
import styled from 'styled-components';
import Typography from '@/components/common/Typography';
import BackArrowBase from '@/assets/svg/top_arrow.svg';
import CloseBase from '@/assets/svg/appbar_close.svg';

interface HeaderProps {
  backArrow?: boolean;
  title: string;
  closeButton?: boolean;
}

const Header = ({ backArrow = false, title = '테스트', closeButton = false }: HeaderProps) => {
  return (
    <Container>
      <IconWrapper visible={backArrow}>
        <img src={BackArrowBase} alt="Back" />
      </IconWrapper>
      <Typography variant="Body_B_L">{title}</Typography>
      <Link from="/notification" to="../">
        <IconWrapper visible={closeButton}>
          <img src={CloseBase} alt="Close" />
        </IconWrapper>
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
`;

const IconWrapper = styled.div<{ visible: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
