import React from 'react';
import { Btn } from './style';

interface CustomBtnProps {
  text: string;
  onClick: () => void;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ text, onClick }) => {
  return (
    <Btn className="body-b-m" onClick={onClick}>
      {text}
    </Btn>
  );
};

export default CustomBtn;
