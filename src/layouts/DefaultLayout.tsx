import { standardViewportWidth } from '@/styles';
import styled from 'styled-components';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* width: ${standardViewportWidth}; */
  margin: 0 auto;
  height: 100vh;
  font-family: 'Pretendard';
  overflow: auto;
`;

export default DefaultLayout;
