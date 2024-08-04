import styled, { createGlobalStyle } from 'styled-components';
import './index.css';

export const standardViewportWidth = `23.5rem`; // 375px

export const GlobalStyle = createGlobalStyle`
/* CSS Reset */
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

html {
    /* font-size: 62.5%;   // 1rem = 10px 로 변경 한 것 */
    font-size: 100%;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; 
}
`;
interface IMarginDivProps {
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}
export const MarginDiv = styled.div<IMarginDivProps>`
  margin-top: ${(props) => props.mt}rem;
  margin-bottom: ${(props) => props.mb}rem;
  margin-right: ${(props) => props.mr}rem;
  margin-left: ${(props) => props.ml}rem;
`;
