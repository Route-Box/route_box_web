import React from 'react';
import styled from 'styled-components';
import ArrowRight from '@/assets/svg/arrow_right.svg';

interface TermsListProps {
  term: string;
}

const TermsListItem: React.FC<TermsListProps> = ({ term }) => {
  return (
    <Container>
      {term}
      <Arrow src={ArrowRight} />
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  color: #000;
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
`;

const Arrow = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export default TermsListItem;
