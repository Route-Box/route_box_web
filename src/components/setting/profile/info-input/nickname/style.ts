import styled from 'styled-components';

export const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

export const NicknameInput = styled.input`
  border: none;
  outline: none;
  flex: 1;

  ::placeholder {
    color: var(--Gray5_outline, #d3d3d3);
    font-feature-settings: 'case' on;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem; /* 144.444% */
  }
`;

export const NicknameCharCount = styled.span`
  color: var(--Gray4_disable-text, #96979b);
  text-align: right;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
`;
