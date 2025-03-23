import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Status = styled.p<{ status: string }>`
  color: ${({ status }) =>
    status === '답변 완료' ? 'var(--main-color, #21C8B6)' : 'var(--Gray2_, #555)'};
`;

export const CreatedAt = styled.p`
  font-weight: 500;
  color: var(--Gray4_disable-text, #96979b);
`;
