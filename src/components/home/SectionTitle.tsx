import styled from 'styled-components';
import ArrowIconBase from '@/assets/svg/arrow_right.svg';

interface SectionTitleProps {
  content: string;
  onClick?: () => void;
  isArrow?: boolean;
}

const SectionTitle = ({ content, onClick, isArrow = false }: SectionTitleProps) => {
  return (
    <Container onClick={onClick}>
      {content}
      {isArrow && <ArrowIcon src={ArrowIconBase} />}
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;

  /* Heading_S */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 130% */
  gap: 0.125rem;
`;

const ArrowIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

export default SectionTitle;
