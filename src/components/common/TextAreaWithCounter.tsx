import React, { useState } from 'react';
import styled from 'styled-components';

interface TextAreaWithCounterProps {
  placeholder?: string;
  maxLength?: number;
  height?: number;
}

const TextAreaWithCounter: React.FC<TextAreaWithCounterProps> = ({
  placeholder,
  maxLength = 200,
  height = 15,
}) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Container height={height}>
      <Textarea
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <TextCounter>
        <span>{text.length}</span>/{maxLength}
      </TextCounter>
    </Container>
  );
};

const Container = styled.div<{ height: number }>`
  position: relative;
  display: flex;
  width: 100%;
  height: ${(props) => props.height}rem;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray5_outline, #d3d3d3);
  background: var(--white-ffffff, #fff);
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  resize: none;
`;

const TextCounter = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1.25rem;
  text-align: right;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  color: var(--Gray4_disable-text, #96979b);

  span {
    color: var(--main-color, #21c8b6);
  }
`;

export default TextAreaWithCounter;
