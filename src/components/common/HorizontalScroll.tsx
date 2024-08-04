import React from 'react';
import styled from 'styled-components';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return <Container className="horizontal-scroll-container">{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* iOS 부드러운 스크롤 */
`;

export default HorizontalScroll;
