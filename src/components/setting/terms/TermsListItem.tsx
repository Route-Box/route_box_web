import React from 'react';
import styled from 'styled-components';
import ArrowRight from '@/assets/svg/arrow_right.svg';
import { Item } from './style';

interface TermsListProps {
  term: string;
  url: string;
}

const TermsListItem: React.FC<TermsListProps> = ({ term, url }) => {
  return (
    <Item className="body-b-m" onClick={() => window.open(url, '_blank')}>
      {term}
      <button>
        <img src={ArrowRight} />
      </button>
    </Item>
  );
};

export default TermsListItem;
