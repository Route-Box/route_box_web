import styled from 'styled-components';

export const Frame = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray5_outline, #d3d3d3);
`;

export const IntroWrite = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  resize: none;

  color: var(--Black_);
  font-feature-settings: 'case' on;

  /* Body_R_M */
  font-family: 'Pretendard';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */

  &::placeholder {
    color: var(--gray-3-placeholder-text);
  }
`;

export const Char = styled.div`
  display: flex;
  margin-left: auto;
`;

export const CharCount = styled.span`
  color: var(--main-color);
  text-align: right;
`;

export const CharMax = styled.span`
  color: var(--Gray4_disable-text);
`;
