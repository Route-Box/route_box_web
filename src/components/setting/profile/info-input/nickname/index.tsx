import React, { useState } from 'react';
import { NicknameCharCount, NicknameContainer, NicknameInput } from './style';
import { InputLabel, InputSection } from '../style';

export const Nickname: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <InputSection>
      <InputLabel>닉네임</InputLabel>
      <NicknameContainer>
        <NicknameInput
          placeholder="닉네임을 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={8}
        />
        <NicknameCharCount>({value.length}/8)</NicknameCharCount>
      </NicknameContainer>
    </InputSection>
  );
};
