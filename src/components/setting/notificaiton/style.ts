import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.25rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.38rem;
  margin-right: 1.38rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--N80);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 1rem;
    height: 1rem;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 2.625rem;
  height: 1.5rem;
  background-color: ${({ isOn }) => (isOn ? '#21C8B6' : '#ccc')};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleThumb = styled.div<{ isOn: boolean }>`
  width: 1rem;
  height: 1rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0.23rem;
  left: ${({ isOn }) => (isOn ? '1.3125rem' : '0.3125rem')};
  transition: left 0.3s ease;
`;
