import { standardViewportWidth } from '@/styles';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  max-width: ${standardViewportWidth};
  height: 4rem;
  /* padding: 1.1875rem 1.625rem; */
  justify-content: center;
  align-items: center;
  /* gap: 0.75rem; */
  position: fixed;
  top: 0;
  box-sizing: border-box;
  background: #fff;

  color: #161616;
  text-align: center;
  font-feature-settings: 'case' on;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 144.444% */

  button {
    display: flex;
    position: absolute;
    border: none;
    background: #fff;
  }

  .left {
    left: 0;
    margin-left: 1.625rem;
  }

  .right {
    right: 0;
    margin-right: 1.625rem;
  }
`;
