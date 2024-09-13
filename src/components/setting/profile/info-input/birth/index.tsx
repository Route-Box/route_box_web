import React, { useEffect, useState } from 'react';
import { InputLabel, InputSection } from '../style';
import { BirthContainer, BirthSelect } from './style';

interface BirthProps {
  birthDay: string;
  handleInputChange: (name: string, value: string) => void;
}

export const Birth: React.FC<BirthProps> = ({ birthDay, handleInputChange }) => {
  const parts = birthDay.split('-');

  const [year, setYear] = useState<string>(parts[0] || '');
  const [month, setMonth] = useState<string>(parts[1] || '');
  const [day, setDay] = useState<string>(parts[2] || '');

  const years = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

  useEffect(() => {
    const [newYear, newMonth, newDay] = birthDay.split('-');
    setYear(newYear || '');
    setMonth(newMonth || '');
    setDay(newDay || '');
  }, [birthDay]);

  useEffect(() => {
    // 조건을 추가하여 불필요한 업데이트 방지
    if (year && month && day && `${year}-${month}-${day}` !== birthDay) {
      handleInputChange('birthDay', `${year}-${month}-${day}`);
    }
  }, [year, month, day, birthDay, handleInputChange]);

  return (
    <InputSection>
      <InputLabel>생년월일</InputLabel>
      {/* <BirthSelect>
        <option value="" disabled selected>
          생년월일
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </BirthSelect> */}
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
