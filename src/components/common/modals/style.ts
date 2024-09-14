import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 18rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  background-color: #fff;

  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.div`
  display: flex;
  padding: 1.75rem 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  border: 0;
  border-top: 1px solid #e2e2e2;

  button:first-child {
    border-right: 1px solid #e2e2e2;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    outline: none;
    padding: 0.9375rem 0.75rem;
  }

  .yes {
    color: var(--main-color);
  }
`;
