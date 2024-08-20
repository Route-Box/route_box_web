import styled from 'styled-components';

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const GenderType = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
`;

interface GenderSelectProps {
  isSelected: boolean;
}

export const GenderSelect = styled.button<GenderSelectProps>`
  display: flex;
  padding: 0.75rem 1.25rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 56.25rem;
  border: 1px solid #e1e6e9;
  background: ${(props) => (props.isSelected ? '#21C8B6' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
`;
