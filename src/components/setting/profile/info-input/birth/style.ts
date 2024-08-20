import styled from 'styled-components';

export const BirthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const BirthSelect = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* align-self: stretch; */
  border: none;
  outline: none;

  color: var(--Gray5_outline, #d3d3d3);
  font-feature-settings: 'case' on;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
`;
