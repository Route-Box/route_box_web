import styled from 'styled-components';

export const InputSection = styled.section`
  display: flex;
  width: 100%;
  height: 3.125rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  border-bottom: 0.0625rem solid var(--GrayScale06, #d3d3d3);
  padding-bottom: 0.5rem;
`;

export const InputLabel = styled.label`
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;
