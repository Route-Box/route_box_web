import styled from 'styled-components';

export const Btn = styled.button<{ disabled: boolean }>`
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) => (disabled ? 'var(--Gray6_disable-btn-bg)' : 'var(--main-color)')};
  color: ${({ disabled }) => (disabled ? 'var(--Gray4_disable-text)' : 'var(--White)')};
  border: none;
  border-radius: 2.5rem;
  cursor: pointer;
`;
