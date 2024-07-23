import styled from 'styled-components';
interface SimpleCardProps {
  content: string;
  bgColor: string;
}

const SimpleCard = ({ content, bgColor }: SimpleCardProps) => {
  return (
    <Frame bgColor={bgColor}>
      <Title>{content}</Title>
    </Frame>
  );
};

const Frame = styled.div<{ bgColor: string }>`
  width: 13.75rem;
  height: 9.125rem;
  flex-shrink: 0;
  fill: #e2f1ec;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.625rem;
`;

const Title = styled.h3`
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;
  position: absolute;
  top: 4.63rem;
  left: 1rem;

  /* Title_M */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  white-space: pre-wrap;
`;

export default SimpleCard;
