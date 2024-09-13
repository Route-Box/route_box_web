import React from 'react';
import styled from 'styled-components';

interface HorizontalScrollProps {
  children: React.ReactNode;
  padding?: number;
}

const GrayBox = ({ children, padding = 0 }: HorizontalScrollProps) => {
  return (
    <Container className="horizontal-scroll-container" padding={padding}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ padding: number }>`
  width: 100%;
  padding: ${(props) => (props.padding ? `${props.padding}rem` : '0rem')};
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

export default GrayBox;
