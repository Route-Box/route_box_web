import styled from 'styled-components';

interface SectionTitleProps {
  content: string;
}

const SubSectionTitle = ({ content }: SectionTitleProps) => {
  return <Container>{content}</Container>;
};

const Container = styled.div`
  color: #1baa6d;
  font-feature-settings: 'case' on;

  /* Body_R_XS */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;

export default SubSectionTitle;
