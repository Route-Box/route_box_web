import styled from 'styled-components';

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HashTag = styled.div`
  display: flex;
  padding: 0.625rem 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 2.5rem;
  background: rgba(68, 195, 185, 0.2);
  color: var(--Sub_black, #242b37);
  /* font-family: 'Spoqa Han Sans Neo'; */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.225rem */
  margin-right: 0.38rem;
  white-space: nowrap;
`;
