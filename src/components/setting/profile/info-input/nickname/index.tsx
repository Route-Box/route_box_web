import React, { useEffect, useState } from 'react';
import { NicknameCharCount, NicknameContainer, NicknameInput } from './style';
import { InputLabel, InputSection } from '../style';

interface NicknameProps {
  nickname: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Nickname: React.FC<NicknameProps> = ({ nickname, handleInputChange }) => {
  const [value, setValue] = useState(nickname);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleInputChange('nickname', newValue);
  };

  useEffect(() => {
    setValue(nickname);
  }, [nickname]);

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
