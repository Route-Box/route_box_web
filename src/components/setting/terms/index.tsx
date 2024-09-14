import React from 'react';
import TermsListItem from './TermsListItem';
import { Container } from './style';

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

export default TermsList;
