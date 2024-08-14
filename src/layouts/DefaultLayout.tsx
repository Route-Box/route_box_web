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
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  width: ${standardViewportWidth};
  margin: 0 auto;
  min-height: calc(100dvh - 4rem);
  font-family: 'Pretendard';
  overflow: auto;
  padding-top: 4rem;
`;

export default DefaultLayout;
