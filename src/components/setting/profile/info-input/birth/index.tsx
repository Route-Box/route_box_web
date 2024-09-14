import React, { useEffect, useState } from 'react';
import { InputLabel, InputSection } from '../style';
import { BirthContainer, BirthSelect } from './style';

interface BirthProps {
  birthDay: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Birth: React.FC<BirthProps> = ({ birthDay, handleInputChange }) => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');

  const years = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
  const months = Array.from({ length: 12 }, (_, i) => `0${i + 1}`.slice(-2));
  const days = Array.from({ length: 31 }, (_, i) => `0${i + 1}`.slice(-2));

  useEffect(() => {
    const [newYear, newMonth, newDay] = birthDay.split('-');
    setYear(newYear || '');
    setMonth(newMonth || '');
    setDay(newDay || '');
    console.log(newYear, newMonth, newDay, birthDay);
  }, [birthDay]);

  useEffect(() => {
    if (year && month && day && `${year}-${month}-${day}` !== birthDay) {
      handleInputChange('birthDay', `${year}-${month}-${day}`);
    }
  }, [year, month, day, birthDay, handleInputChange]);

  return (
    <InputSection>
      <InputLabel>생년월일</InputLabel>
      <BirthContainer>
        <BirthSelect hasValue={!!year} value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="" disabled selected>
            년
          </option>
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect hasValue={!!year} value={year} onChange={(e) => setMonth(e.target.value)}>
          <option value="" disabled selected>
            월
          </option>
          {months.map((mn) => (
            <option key={mn} value={mn}>
              {mn}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect hasValue={!!year} value={year} onChange={(e) => setDay(e.target.value)}>
          <option value="" disabled selected>
            일
          </option>
          {days.map((dy) => (
            <option key={dy} value={dy}>
              {dy}
            </option>
          ))}
        </BirthSelect>
      </BirthContainer>
    </InputSection>
  );
};
