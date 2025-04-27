import React, { useEffect, useState } from 'react';
import { Char, Frame, IntroWrite } from './style';

interface WriteProps {
  value: string;
  onInputChange: (value: string) => void;
}

const Write: React.FC<WriteProps> = ({ value, onInputChange }) => {
  return (
    <Frame>
      <IntroWrite
        className="body-r-m"
        placeholder="한 줄 소개를 작성해주세요"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        maxLength={25}
      />
      <Char className="body-r-xs">
        <span className="count">{value.length}</span>
        <span className="max">/25</span>
      </Char>
    </Frame>
  );
};

export default Write;
