import { useState } from 'react';
import styled from 'styled-components';

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
        placeholder="한 줄 소개를 작성해주세요"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={25}
      />
      <Char>
        <CharCount>{inputValue.length}</CharCount>
        <CharMax>/25</CharMax>
      </Char>
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray5_outline, #d3d3d3);
`;

const IntroWrite = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: none;
  color: var(--Black_, #161616);
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  ::placeholder {
    color: var(--gray-3-placeholder-text, #70747e);
  }
  outline: none;
  resize: none;
`;

const Char = styled.div`
  display: flex;
  margin-left: auto;
`;

const CharCount = styled.span`
  color: var(--main-color, #21c8b6);
  text-align: right;
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;

const CharMax = styled.span`
  color: var(--Gray4_disable-text, #96979b);
  font-feature-settings: 'case' on;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;

export default Write;
