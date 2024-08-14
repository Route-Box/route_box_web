import React, { useEffect, useState } from 'react';
import { InputLabel, InputSection } from '../style';
import { BirthContainer, BirthSelect } from './style';

interface BirthProps {
  onInputChange: (value: string) => void;
}

export const Birth: React.FC<BirthProps> = ({ onInputChange }) => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');

  const years = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

  useEffect(() => {
    if (year && month && day) {
      onInputChange(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
    }
  }, [year, month, day, onInputChange]);

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
        <BirthSelect value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="" disabled selected>
            년
          </option>
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="" disabled selected>
            월
          </option>
          {months.map((mn) => (
            <option key={mn} value={mn}>
              {mn}
            </option>
          ))}
        </BirthSelect>
        <BirthSelect value={day} onChange={(e) => setDay(e.target.value)}>
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
