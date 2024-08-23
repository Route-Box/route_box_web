import React from 'react';
import styled from 'styled-components';
interface ImageButtonProps {
  imageSrc: string;
  content: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ImageButton = ({ imageSrc, content, onClick }: ImageButtonProps) => {
  return (
    <Frame imageSrc={imageSrc} onClick={onClick}>
      <Title>{content}</Title>
    </Frame>
  );
};

const Frame = styled.div<{ imageSrc: string }>`
  width: 9.9375rem;
  height: 9.9375rem;
  flex-shrink: 0;
  background-image: url(${(props) => props.imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
`;

const Title = styled.h3`
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;

  /* Title_M */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  white-space: pre-wrap;
`;

export default ImageButton;
