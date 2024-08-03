import React from 'react';
import styled from 'styled-components';

interface DoneBtnProps {
  isActive: boolean;
}

const DoneBtn: React.FC<DoneBtnProps> = ({ isActive }) => {
  return <Btn isActive={isActive}>완료</Btn>;
};

const Btn = styled.div<{ isActive: boolean }>`
  display: flex;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2.5rem;
  background: ${({ isActive }) =>
    isActive ? 'var(--main-color, #21C8B6)' : 'var(--Gray6_disable-btn-bg, #f2f2f2)'};
  color: ${({ isActive }) =>
    isActive ? 'var(--White, #FFF)' : 'var(--Gray4_disable-text, #96979b)'};
  text-align: center;
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

export default DoneBtn;
