// import AppHeader from "../components/Header/main";

import { standardViewportWidth } from '@/components/styles';
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
  /* width: ${standardViewportWidth}; */
  width: 100%;
  height: 100vh;
  font-family: 'Pretendard';
  overflow: auto;
  background-color: aliceblue;
`;

export default DefaultLayout;
