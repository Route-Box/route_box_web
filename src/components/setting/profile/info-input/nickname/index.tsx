import React, { useState } from 'react';
import { NicknameCharCount, NicknameContainer, NicknameInput } from './style';
import { InputLabel, InputSection } from '../style';

interface NicknameProps {
  onInputChange: (value: string) => void;
}

export const Nickname: React.FC<NicknameProps> = ({ onInputChange }) => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onInputChange(newValue);
  };

  return (
    <InputSection>
      <InputLabel>닉네임</InputLabel>
      <NicknameContainer>
        <NicknameInput
          placeholder="닉네임을 입력해주세요"
          value={value}
          onChange={handleChange}
          maxLength={8}
        />
        <NicknameCharCount>({value.length}/8)</NicknameCharCount>
      </NicknameContainer>
    </InputSection>
  );
};
