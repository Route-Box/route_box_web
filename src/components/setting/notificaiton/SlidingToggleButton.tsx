import React, { useState } from 'react';
import { ToggleContainer, ToggleSwitch, ToggleThumb } from './style';

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

export default SlidingToggleButton;
