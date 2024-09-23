import React from 'react';
import TermsListItem from './TermsListItem';
import { Container } from './style';

const TermsList: React.FC = () => {
  const terms = ['이용약관', '개인정보처리방침', '위치정보이용 약관'];
  const urls = [
    'https://www.notion.so/10845c063330803d8e96e6d58739a77b',
    'https://www.notion.so/10845c063330800488e9e377850fe8e0',
    'https://www.notion.so/f9b6a0a31d8b4334900137aa9cb023f3',
  ];
  return (
    <Container>
      {terms.map((term, index) => (
        <TermsListItem key={index} term={term} url={urls[index]} />
      ))}
    </Container>
  );
};

export default TermsList;
