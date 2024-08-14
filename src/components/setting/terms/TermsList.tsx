import React from 'react';
import TermsListItem from './TermsListItem';
import styled from 'styled-components';

const TermsList: React.FC = () => {
  const terms = ['이용약관', '개인정보처리방침', '위치정보이용 약관'];

  return (
    <Container>
      {terms.map((term, index) => (
        <TermsListItem key={index} term={term} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.25rem 1.38rem;
  box-sizing: border-box;
`;

export default TermsList;
