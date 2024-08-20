import React, { useState } from 'react';
import styled from 'styled-components';

const SlidingToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <ToggleContainer>
      <ToggleSwitch onClick={handleClick} isOn={isOn}>
        <ToggleThumb isOn={isOn} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 2.625rem;
  height: 1.5rem;
  background-color: ${({ isOn }) => (isOn ? '#21C8B6' : '#ccc')};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleThumb = styled.div<{ isOn: boolean }>`
  width: 1rem;
  height: 1rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0.23rem;
  left: ${({ isOn }) => (isOn ? '1.3125rem' : '0.3125rem')};
  transition: left 0.3s ease;
`;

export default SlidingToggleButton;
