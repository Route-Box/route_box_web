import React from 'react';
import styled from 'styled-components';

interface SaveBtnProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
}

const SaveButton: React.FC<SaveBtnProps> = ({ isActive, text, onClick }) => {
  return (
    <Button onClick={onClick} disabled={!isActive}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`;

export default SaveButton;
