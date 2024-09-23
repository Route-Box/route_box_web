import styled from 'styled-components';

export const Item = styled.button<{ isLast: boolean }>`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 1.75rem 0;
  color: #000;
  border-bottom: ${({ isLast }) =>
    isLast ? 'none' : '1px solid var(--Gray6_disable-btn-bg, #f2f2f2)'};
`;
