import React, { useState } from 'react';
import { Char, CharCount, CharMax, Frame, IntroWrite } from './style';

interface WriteProps {
  onInputChange: (value: string) => void;
}

const Write: React.FC<WriteProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

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
        <CharCount>{inputValue.length}</CharCount>
        <CharMax>/25</CharMax>
      </Char>
    </Frame>
  );
};

export default Write;
