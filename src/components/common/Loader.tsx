import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoaderBase from '@/assets/gif/loader.gif';

interface LoaderProps {
  size?: number;
  fullScreen?: boolean;
}

const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.fullScreen &&
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
  width: ${(props) => props.size || 50}px;
  height: ${(props) => props.size || 50}px;
`;

const Loader: React.FC<LoaderProps> = ({ size, fullScreen = false }) => {
  return (
    <LoaderWrapper fullScreen={fullScreen}>
      <LoaderImage src={LoaderBase} alt="Loading..." size={size} />
    </LoaderWrapper>
  );
};

export default Loader;
