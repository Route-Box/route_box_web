import React from 'react';
import styled from 'styled-components';
import LoaderBase from '@/assets/png/loading-image.png';
import Typography from './Typography';

interface LoaderProps {
  size?: number;
  $fullScreen?: boolean;
}

const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) =>
    props.$fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
  `}
`;

const LoaderImage = styled.img<LoaderProps>`
  width: ${(props) => props.size || 7.5}rem;
  height: ${(props) => props.size || 7.5}rem;
`;

const Loader: React.FC<LoaderProps> = ({ size, $fullScreen = false }) => {
  return (
    <LoaderWrapper $fullScreen={$fullScreen}>
      <LoaderImage src={LoaderBase} alt="Loading..." size={size} />
      <Typography variant="Body_B_M" color="#70747E">
        정보를 불러오는 중입니다. <br />
        잠시만 기다려 주세요.
      </Typography>
    </LoaderWrapper>
  );
};

export default Loader;
