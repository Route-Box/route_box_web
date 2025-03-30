import Typography from '@/components/common/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0 1.38rem;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ellipsis = styled(Typography)`
  overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Status = styled.p<{ status: string }>`
  color: ${({ status }) =>
    status === '답변 완료' ? 'var(--main-color, #21C8B6)' : 'var(--Gray2_, #555)'};
`;

export const CreatedAt = styled.p`
  font-weight: 500;
  color: var(--Gray4_disable-text, #96979b);
`;
