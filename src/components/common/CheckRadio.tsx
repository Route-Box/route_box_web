import React from 'react';
import styled from 'styled-components';
import CheckDefault from '@/assets/svg/check-default.svg';
import CheckDisabled from '@/assets/svg/check-disabled.svg';
import CheckChecked from '@/assets/svg/check-checked.svg';

interface CheckRadioListProps {
  onClick: () => void;
  checked: boolean;
  text: string;
  disabled?: boolean;
}

const CheckRadio: React.FC<CheckRadioListProps> = ({
  onClick,
  checked,
  text,
  disabled = false,
}) => {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <Icon
        src={disabled ? CheckDisabled : checked ? CheckChecked : CheckDefault}
        alt="check icon"
      />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Icon = styled.img`
  margin-right: 0.62rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const Text = styled.span`
  font-size: 1rem;
`;

export default CheckRadio;
