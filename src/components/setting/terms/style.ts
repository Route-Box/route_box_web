import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.25rem 1.38rem;
  box-sizing: border-box;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  color: var(--black);

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
