import React from 'react';
import TermsListItem from './TermsListItem';
import styled from 'styled-components';

const TermsList: React.FC = () => {
  const terms = [
    { name: '이용약관', path: '/setting/terms/service' },
    { name: '개인정보처리방침', path: '/setting/terms/privacy' },
    { name: '위치정보이용 약관', path: '/setting/terms/location' },
  ];

  return (
    <Container>
      {terms.map((term, index) => (
        <TermsListItem key={index} term={term.name} to={term.path} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  margin-top: 0.25rem;
  /* padding: 0.25rem 1.38rem; */
`;

export default TermsList;
