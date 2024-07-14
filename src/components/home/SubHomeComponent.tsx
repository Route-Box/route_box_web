import React from 'react';
import styled from 'styled-components';

interface SubComponentProps {
  title: string;
}

const SubHomeComponent: React.FC<SubComponentProps> = ({ title }: SubComponentProps) => {
  return (
    <Frame>
      <Typo>SubComponent</Typo>
      <Typo>{title}</Typo>
    </Frame>
  );
};

const Frame = styled.div`
  width: 100%;
`;

const Typo = styled.div`
  font-size: 3rem;
`;

export default SubHomeComponent;
