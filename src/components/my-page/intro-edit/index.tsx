import React, { useEffect, useState } from 'react';
import { Char, Frame, IntroWrite } from './style';

interface WriteProps {
  value: string;
  onInputChange: (value: string) => void;
}

const Write: React.FC<WriteProps> = ({ value, onInputChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Frame>
      <IntroWrite
        className="body-r-m"
        placeholder="한 줄 소개를 작성해주세요"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={25}
      />
      <Char className="body-r-xs">
        <span className="count">{inputValue.length}</span>
        <span className="max">/25</span>
      </Char>
    </Frame>
  );
};

export default Write;
