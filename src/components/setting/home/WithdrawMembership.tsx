import React from 'react';
import styled from 'styled-components';

const WithdrawMembership: React.FC = () => {
  return <Withdraw>회원 탈퇴</Withdraw>;
};

const Withdraw = styled.section`
  width: 100%;
  color: var(--Gray4_disable-text, #96979b);
  font-feature-settings: 'case' on;
  -webkit-text-stroke-color: var(--Gray6_disable-btn-bg, #f2f2f2);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  text-decoration-line: underline;
  text-align: left;
`;

export default WithdrawMembership;
