import React from 'react';
import { Btn } from './style';

interface CustomBtnProps {
  disabled: boolean;
  text: string;
  onClick: () => void;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ disabled, text, onClick }) => {
  return (
    <Btn className="body-b-m" disabled={disabled} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default CustomBtn;
