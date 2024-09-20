import React, { useEffect, useState } from 'react';
import { GenderContainer, GenderSelect, GenderType } from './style';
import { InputLabel } from '../style';

interface GenderProps {
  gender: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Gender: React.FC<GenderProps> = ({ gender, handleInputChange }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
    handleInputChange('gender', gender);
  };

  return (
    <GenderContainer>
      <InputLabel>성별</InputLabel>
      <GenderType>
        <GenderSelect isSelected={selectedGender === '남성'} onClick={() => handleSelect('남성')}>
          남성
        </GenderSelect>
        <GenderSelect isSelected={selectedGender === '여성'} onClick={() => handleSelect('여성')}>
          여성
        </GenderSelect>
        <GenderSelect
          isSelected={selectedGender === '비공개'}
          onClick={() => handleSelect('비공개')}
        >
          비공개
        </GenderSelect>
      </GenderType>
    </GenderContainer>
  );
};
