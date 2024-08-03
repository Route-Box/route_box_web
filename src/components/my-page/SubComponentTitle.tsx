import React from 'react';
import styled from 'styled-components';

interface SubComponentProps {
  title: string;
}

const SubComponentTitle: React.FC<SubComponentProps> = ({ title }: SubComponentProps) => {
  return (
    <Frame>
      <Title>{title}</Title>
    </Frame>
  );
};

const Frame = styled.div`
  width: 100%;
`;

const Title = styled.div`
  color: var(--Gray1_, #333);
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem; /* 150% */
`;

export default SubComponentTitle;
