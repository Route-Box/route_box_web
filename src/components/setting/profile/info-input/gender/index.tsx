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

  useEffect(() => {
    setSelectedGender(gender);
  }, [gender]);

  return (
    <GenderContainer>
      <InputLabel>성별</InputLabel>
      <GenderType>
        <GenderSelect isSelected={selectedGender === 'MALE'} onClick={() => handleSelect('MALE')}>
          남성
        </GenderSelect>
        <GenderSelect
          isSelected={selectedGender === 'FEMALE'}
          onClick={() => handleSelect('FEMALE')}
        >
          여성
        </GenderSelect>
        <GenderSelect
          isSelected={selectedGender === 'PRIVATE'}
          onClick={() => handleSelect('PRIVATE')}
        >
          비공개
        </GenderSelect>
      </GenderType>
    </GenderContainer>
  );
};
